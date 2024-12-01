import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function NotFoundScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../assets/404-image.webp')}
        style={styles.image}
      />
      <Text style={styles.text}>Страница не найдена</Text>
      <Text style={styles.subtitle}>Попробуйте вернуться на главный экран или перезагрузить приложение.</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#ff6347',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: 'gray',
  },
});
