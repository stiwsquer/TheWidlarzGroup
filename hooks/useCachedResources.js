import { FontAwesome } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { useEffect, useState } from 'react';

export default function useCachedResources() {
  const [isLoadingComplete, setLoadingComplete] = useState(false);

  useEffect(() => {
    async function loadResourcesAndDataAsync() {
      try {
        await Font.loadAsync({
          ...FontAwesome.font,
          'poopins-bold': require('../assets/fonts/Poppins/Poppins-Bold.ttf'),
          'poopins-500': require('../assets/fonts/Poppins/Poppins-Medium.ttf'),
          'poopins-400': require('../assets/fonts/Poppins/Poppins-Regular.ttf'),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        setLoadingComplete(true);
      }
    }

    loadResourcesAndDataAsync();
  }, []);

  return isLoadingComplete;
}
