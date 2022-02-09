import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import BottomTab from './BottomTab';

const Stack = createNativeStackNavigator();
const navigation = () => {
  return (
    <Stack.Navigator initialRouteName="Root" screenOptions={{headerShown:false}}>
      <Stack.Screen name="Root" component={BottomTab} />
    </Stack.Navigator>
  );
};

export default navigation;
