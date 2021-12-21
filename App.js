import useCachedResources from './hooks/useCachedResources';
import Navigation from './navigation/Navigation';

export default function App() {
  const isLoadingComplete = useCachedResources();

  if (!isLoadingComplete) return null;

  return <Navigation />;
}
