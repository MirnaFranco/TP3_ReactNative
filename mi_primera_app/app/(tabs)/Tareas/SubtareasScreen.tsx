import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TareasStackParamList } from '../../../navigation/TareasStack';
import { Subtarea, Tarea } from '../../../constants/tareas';

type NavigationProp = NativeStackNavigationProp<TareasStackParamList, 'SubtareasScreen'>;

export default function SubtareasScreen() {
  const navigation = useNavigation<NavigationProp>();
  const route = useRoute();

  const { tarea } = route.params as { tarea: Tarea };

  const handlePress = (subtarea: Subtarea) => {
    navigation.navigate('DetalleSubtareaScreen', { subtarea });
  };

  return (
    <FlatList
      data={tarea.subtareas}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <TouchableOpacity onPress={() => handlePress(item)}>
          <View style={styles.item}>
            <Text style={styles.title}>{item.titulo}</Text>
          </View>
        </TouchableOpacity>
      )}
    />
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 16,
    borderBottomWidth: 1,
    borderColor: '#ddd',
  },
  title: {
    fontSize: 18,
  },
});
