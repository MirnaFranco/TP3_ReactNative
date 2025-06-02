// screens/Dashboard/Dashboard.tsx
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import TareasScreen from '../Tareas/TareasScreen';
import SubtareasScreen from '../Tareas/SubtareasScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Dashboard() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName = 'list';

          if (route.name === 'Tareas') iconName = 'list';
          if (route.name === 'Subtareas') iconName = 'checkmark-circle';

          return <Ionicons name={iconName as any} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Tareas" component={TareasScreen} />
      <Tab.Screen name="Subtareas" component={SubtareasScreen} />
    </Tab.Navigator>
  );
}
