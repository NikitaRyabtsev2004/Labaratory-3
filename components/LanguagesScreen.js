import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import LanguageItem from './LanguageItem';

const languages = [
  { id: '1', lang: 'JavaScript', image: require('../assets/lang1.webp') },
  { id: '2', lang: 'Python', image: require('../assets/lang2.jpg') },
  { id: '3', lang: 'React Native', image: require('../assets/reactlogo.webp') },
];

export default function LanguagesScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Мои языки программирования</Text>
      <FlatList
        data={languages}
        renderItem={({ item }) => <LanguageItem lang={item.lang} image={item.image} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
  },
});
