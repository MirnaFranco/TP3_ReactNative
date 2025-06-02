import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import TareasScreen from '../app/(tabs)/Tareas/TareasScreen';
import SubtareasScreen from '../app/(tabs)/Tareas/SubtareasScreen';
import DetalleSubtareaScreen from '../app/(tabs)/Tareas/DetalleSubtareaScreen';
import { Tarea, Subtarea } from '../constants/tareas';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

export type RootStackParamList = {
  Login: undefined;
  Dashboard: undefined;
};

export type TareasStackParamList = {
  TareasScreen: undefined;
  SubtareasScreen: { tarea: Tarea };
  DetalleSubtareaScreen: { subtarea: Subtarea };
};

const Stack = createNativeStackNavigator<TareasStackParamList>();

export default function TareasStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="TareasScreen" component={TareasScreen} options={{ title: 'Tareas' }} />
      <Stack.Screen name="SubtareasScreen" component={SubtareasScreen} options={{ title: 'Subtareas' }} />
      <Stack.Screen name="DetalleSubtareaScreen" component={DetalleSubtareaScreen} options={{ title: 'Detalle' }} />
    </Stack.Navigator>
  );
}

