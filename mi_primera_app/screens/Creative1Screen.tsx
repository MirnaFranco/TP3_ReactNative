import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function Creative1Screen() {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://randomuser.me/api/portraits/men/41.jpg' }}
        style={styles.image}
      />
      <Text style={styles.name}>Juan Pérez</Text>
      <Text style={styles.bio}>Desarrollador de software de React Native 🚀</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center', padding: 20 },
  image: { width: 120, height: 120, borderRadius: 60, marginBottom: 15 },
  name: { fontSize: 22, fontWeight: 'bold' },
  bio: { fontSize: 16, textAlign: 'center', marginTop: 8, color: '#555' },
});
