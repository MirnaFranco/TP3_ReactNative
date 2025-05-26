import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const productos = [
  { id: '1', nombre: 'Shampoo', precio: 1200 },
  { id: '2', nombre: 'Pasta dental', precio: 950 },
  { id: '3', nombre: 'Jabón líquido', precio: 1500 },
  { id: '4', nombre: 'Toalla', precio: 2500 },
  { id: '5', nombre: 'Desodorante', precio: 1100 },
];

export default function Creative2Screen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Lista de Productos</Text>
      <FlatList
        data={productos}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nombre}>{item.nombre}</Text>
            <Text style={styles.precio}>${item.precio}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f8f8f8' },
  title: { fontSize: 24, fontWeight: 'bold', marginBottom: 15 },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    marginBottom: 10,
    borderRadius: 8,
    elevation: 2,
  },
  nombre: { fontSize: 18, fontWeight: '500' },
  precio: { fontSize: 16, color: '#444' },
});
