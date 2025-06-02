import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { TareasStackParamList } from '../../../navigation/TareasStack';
import { RouteProp } from '@react-navigation/native';

type DetalleSubtareaRouteProp = RouteProp<TareasStackParamList, 'DetalleSubtareaScreen'>;

export default function DetalleSubtareaScreen() {
  const route = useRoute<DetalleSubtareaRouteProp>();
  const { subtarea } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{subtarea.titulo}</Text>
      <Text style={styles.label}>Descripción:</Text>
      <Text style={styles.text}>{subtarea.descripcion}</Text>
      <Text style={styles.label}>Estado:</Text>
      <Text style={styles.text}>{subtarea.estado}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  label: {
    fontSize: 16,
    marginTop: 10,
    fontWeight: '600',
  },
  text: {
    fontSize: 16,
  },
});
