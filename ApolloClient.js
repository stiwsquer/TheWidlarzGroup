// import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
// import { setContext } from '@apollo/client/link/context';
// import { WebSocketLink } from '@apollo/client/link/ws';
// import { split } from '@apollo/client';
// import { getMainDefinition } from '@apollo/client/utilities';

// const httpLink = createHttpLink({
//   uri: `https://chat.thewidlarzgroup.com/api/graphql`,
// });

// const authLink = setContext((_, { headers }) => {
//   return {
//     headers: {
//       ...headers,
//       authorization: `Bearer ${process.env.EXPO_ACCESS_TOKEN}`,
//     },
//   };
// });

// const concatenatedHttpLink = authLink.concat(httpLink);

// const wsLink = new WebSocketLink({
//   uri: 'wss://chat.thewidlarzgroup.com/socket',
//   options: {
//     reconnect: true,
//     connectionParams: {
//       token: `${process.env.EXPO_ACCESS_TOKEN}`,
//     },
//   },
// });

// const splitLink = split(
//   ({ query }) => {
//     const definition = getMainDefinition(query);
//     return (
//       definition.kind === 'OperationDefinition' &&
//       definition.operation === 'subscription'
//     );
//   },
//   wsLink,
//   concatenatedHttpLink
// );

// export const client = new ApolloClient({
//   link: splitLink,
//   cache: new InMemoryCache(),
// });

import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { split } from '@apollo/client';

import * as AbsintheSocket from '@absinthe/socket';
import { createAbsintheSocketLink } from '@absinthe/socket-apollo-link';
import { Socket as PhoenixSocket } from 'phoenix';
import { hasSubscription } from '@jumpn/utils-graphql';

const httpLink = createHttpLink({
  uri: 'https://chat.thewidlarzgroup.com/api/graphql',
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer ${process.env.EXPO_ACCESS_TOKEN}`,
    },
  };
});

const authedHttpLink = authLink.concat(httpLink);

const phoenixSocket = new PhoenixSocket(
  'wss://chat.thewidlarzgroup.com/socket',
  {
    params: () => {
      return { token: `${process.env.EXPO_ACCESS_TOKEN}` };
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
