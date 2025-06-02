import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import SettingsScreen from '../screens/SettingsScreen';
import Creative1Screen from '../screens/Creative1Screen';
import Creative2Screen from '../screens/Creative2Screen';
import TareasStack from './TareasStack'; 


const Tab = createBottomTabNavigator();

export default function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Perfil" component={ProfileScreen} />
      <Tab.Screen name="Ajustes" component={SettingsScreen} />
      <Tab.Screen name="Foto" component={Creative1Screen} />
      <Tab.Screen name="Productos" component={Creative2Screen} />
      <Tab.Screen 
        name="Tareas" 
        component={TareasStack} 
        options={{ headerShown: false }} //  para evitar doble header
      />
    </Tab.Navigator>
  );
}
