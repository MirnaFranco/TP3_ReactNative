import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { TareasStackParamList } from './navigation/TareasStack';
import TareasStack from './navigation/TareasStack'; // usás el stack ya definido


const Stack = createNativeStackNavigator<TareasStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <TareasStack />
    </NavigationContainer>
  );
}
