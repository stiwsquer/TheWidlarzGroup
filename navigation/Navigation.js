import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { navigationRef } from './RootNavigation';
import Rooms from '../screens/Rooms/Rooms';
import Room from '../screens/Room/Room';
import Login from '../screens/Login/Login';

const { Navigator, Screen } = createNativeStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Navigator initialRouteName="Login">
        <Screen
          name="Rooms"
          component={Rooms}
          options={{ headerShown: false }}
        />
        <Screen name="Room" component={Room} options={{ headerShown: false }} />
        <Screen
          name="Login"
          component={Login}
          options={{ headerShown: false }}
        />
      </Navigator>
    </NavigationContainer>
  );
}
