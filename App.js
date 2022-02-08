import React from 'react';
import type {Node} from 'react';
import {
  View,
  useColorScheme,
} from 'react-native';
import SearchScreen from './src/screens/SearchScreen';
import HomeScreen from './src/screens/HomeScreen';
import GuestsScreen from './src/screens/GuestsScreen';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View>
      <GuestsScreen/>
    </View>
  );
};

export default App;
