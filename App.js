import React from 'react';
import MainScreen from './Screens/MainScreen';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';

export default function App() {
  return (
    <NavigationContainer>
        <MainScreen/>
    </NavigationContainer>
  );
}

