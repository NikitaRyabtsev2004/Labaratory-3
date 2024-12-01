import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/profile.jpg')}
        style={styles.profileImage}
      />
      <Text style={styles.name}>Рябцев Никита</Text>
      <Text style={styles.description}>Привет! Я разработчик мобильных приложений и люблю учить новые технологии!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fafafa',
    padding: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },
  name: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2e2e2e',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    color: '#777',
    marginHorizontal: 20,
  },
});
