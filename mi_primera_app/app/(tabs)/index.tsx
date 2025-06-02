import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';
import TareasScreen from './Tareas/TareasScreen';
import SubtareasScreen from './Tareas/SubtareasScreen';

const Tab = createBottomTabNavigator();

export default function Tabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          const icons: Record<string, keyof typeof Ionicons.glyphMap> = {
            Tareas: 'list',
            Subtareas: 'checkmark-circle',
          };
          return (
            <Ionicons name={icons[route.name] || 'list'} size={size} color={color} />
          );
        },
      })}
    >
      <Tab.Screen name="Tareas" component={TareasScreen} />
      <Tab.Screen name="Subtareas" component={SubtareasScreen} />
    </Tab.Navigator>
  );
}
