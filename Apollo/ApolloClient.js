import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { split } from '@apollo/client';
import * as AbsintheSocket from '@absinthe/socket';
import { createAbsintheSocketLink } from '@absinthe/socket-apollo-link';
import PhoenixSocket from './socket';
import { hasSubscription } from '@jumpn/utils-graphql';
import { getToken } from '../token/tokenStorage';

const httpLink = createHttpLink({
  uri: 'https://chat.thewidlarzgroup.com/api/graphql',
});

const authLink = setContext(async (_, { headers }) => {
  const token = await getToken();
  console.log(token);
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ``,
    },
  };
});

const authedHttpLink = authLink.concat(httpLink);

const phoenixSocket = new PhoenixSocket(
  'wss://chat.thewidlarzgroup.com/socket',
  {
    params: async () => {
      const token = await getToken();
      console.log(token);
      if (token) {
        return { token: token };
      } else {
        return {};
      }
    },
  }
);

const absintheSocket = AbsintheSocket.create(phoenixSocket);

const websocketLink = createAbsintheSocketLink(absintheSocket);

const link = split(
  (operation) => hasSubscription(operation.query),
  websocketLink,
  authedHttpLink
);

const cache = new InMemoryCache();

export const client = new ApolloClient({
  link,
  cache,
});
