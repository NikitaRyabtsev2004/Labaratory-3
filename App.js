import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AboutScreen from './components/AboutScreen';
import LanguagesScreen from './components/LanguagesScreen';
import NotFoundScreen from './components/NotFoundScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color, size }) => {
            let iconName;
            if (route.name === 'О себе') {
              iconName = 'person';
            } else if (route.name === 'Мои языки') {
              iconName = 'code';
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'blue',
          tabBarInactiveTintColor: 'gray',
        })}
      >
        <Tab.Screen name="О себе" component={AboutScreen} />
        <Tab.Screen name="Мои языки" component={LanguagesScreen} />
        <Tab.Screen name="Не найдено" component={NotFoundScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
