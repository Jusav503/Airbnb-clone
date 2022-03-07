import React from 'react';
import type {Node} from 'react';
import Navigation from './src/navigation';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { withAuthenticator } from 'aws-amplify-react-native'

const App: () => Node = () => {

  return (
    <NavigationContainer>
      <Navigation/>
    </NavigationContainer>
  );
};

export default withAuthenticator(App)
