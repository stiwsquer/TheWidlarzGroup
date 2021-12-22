import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: `https://chat.thewidlarzgroup.com/api/graphql`,
});

const authLink = setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      authorization: `Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJhdWQiOiJjaGF0bHkiLCJleHAiOjE2NDI0MjE4MTAsImlhdCI6MTY0MDAwMjYxMCwiaXNzIjoiY2hhdGx5IiwianRpIjoiMzFiNDJmN2QtNWQyZi00ODdlLTkwNjktNDY0MWYwYTJiYTY2IiwibmJmIjoxNjQwMDAyNjA5LCJzdWIiOiIxM2RiMDNhMC1kNWFlLTQzY2QtOGFjNy0wMzEzZTRlZjcyMGUiLCJ0eXAiOiJhY2Nlc3MifQ.gRDYoDER9sZpvYrqkzZjjY_m7uPY6ICjxmPtT9PTyDS2iNfiFWA9EppHxmUwu0uZId9kDPCRz9ssEcW3cn5Ipg`,
    },
  };
});

export const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});
