import React from 'react';
import type {Node} from 'react';
import {
  View,
  useColorScheme,
} from 'react-native';
import Navigation from './src/navigation';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
  );
};

export default App;
