import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation/Navigation';
import { ApolloProvider } from '@apollo/client';
import { client } from './Apollo/ApolloClient';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) return null;

  return (
    <ApolloProvider client={client}>
      <Navigation />
    </ApolloProvider>
  );
}
