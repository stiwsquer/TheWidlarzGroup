import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './RootNavigation';
import Rooms from '../screens/Rooms';

const { Navigator, Screen } = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator initialRouteName="Rooms">
        <Screen
          name="Rooms"
          component={Rooms}
          options={{ headerShown: false }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
