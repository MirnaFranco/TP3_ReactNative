import React from 'react';
import { View, Text, FlatList, TouchableOpacity, StyleSheet } from 'react-native';
import { tareas } from '../../../constants/tareas';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { TareasStackParamList } from '../../../navigation/TareasStack';
import { Tarea } from '../../../constants/tareas'; // asegurate de importar bien el tipo

type NavigationProp = NativeStackNavigationProp<TareasStackParamList, 'TareasScreen'>;

export default function TareasScreen() {
  const navigation = useNavigation<NavigationProp>();

  const handlePress = (item: Tarea) => {
    navigation.navigate('SubtareasScreen', { tarea: item });
  };

  return (
    <FlatList
      data={tareas}
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
