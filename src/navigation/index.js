import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import GuestsScreen from '../screens/GuestsScreen';
import ResultsScreen from '../screens/ResultsScreen';
import SearchScreen from '../screens/SearchScreen';
import BottomTab from './BottomTab';

const Stack = createNativeStackNavigator();
const navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Root" screenOptions={{headerShown:false}}>
      <Stack.Screen name="Root" component={BottomTab} />
      <Stack.Screen name="Search" component={SearchScreen} />
      <Stack.Screen name="Guests" component={GuestsScreen} />
      <Stack.Screen name="Results" component={ResultsScreen} />
    </Stack.Navigator>
  );
};

export default navigation;
