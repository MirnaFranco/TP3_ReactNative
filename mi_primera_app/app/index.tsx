import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';

import TareasScreen from './(tabs)/Tareas/TareasScreen';
import SubtareasScreen from './(tabs)/Tareas/SubtareasScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: true,
          tabBarIcon: ({ color, size }) => {
            let iconName: keyof typeof Ionicons.glyphMap = 'list';

            if (route.name === 'Tareas') iconName = 'list';
            else if (route.name === 'Subtareas') iconName = 'checkmark-circle';

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
      >
        <Tab.Screen name="Tareas" component={TareasScreen} />
        <Tab.Screen name="Subtareas" component={SubtareasScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
