import React from 'react';
import type {Node} from 'react';
import {
  View,
  useColorScheme,
} from 'react-native';
import SearchScreen from './src/screens/SearchScreen';
import HomeScreen from './src/screens/HomeScreen';

const App: () => Node = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <View>
      <SearchScreen/>
    </View>
  );
};

export default App;
