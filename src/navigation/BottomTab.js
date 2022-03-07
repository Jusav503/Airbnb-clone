import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Fontisto from 'react-native-vector-icons/Fontisto';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Feather from 'react-native-vector-icons/Feather';
import EvilIcons from 'react-native-vector-icons/EvilIcons';

import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import DetailsScreen from '../screens/DetailsScreen';
import ExploreScreen from '../screens/ExploreScreen';
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();
const BottomTab = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'red',
        tabBarLabelStyle: {fontSize: 12, fontWeight: 'bold', paddingBottom: 5},
      }}>
      <Tab.Screen
        name="Explore"
        component={ExploreScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Fontisto name="search" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Saved"
        component={SearchScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome name="heart-o" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Trips"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <FontAwesome5 name="airbnb" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Inbox"
        component={HomeScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <Feather name="message-square" size={20} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({color, size}) => (
            <EvilIcons name="user" size={25} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;
