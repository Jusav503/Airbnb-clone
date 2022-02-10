import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import {SearchBar} from 'react-native-elements';
import {useNavigation} from '@react-navigation/native';

import styles from './styles';

const HomeScreen = () => {
  const navigation = useNavigation();
  return (
    <ImageBackground
      source={require('../../../assets/images/wallpaper.jpg')}
      style={styles.container}>
      <ScrollView>
        <SearchBar
          placeholder="Where are you going?"
          lightTheme={true}
          round={true}
          containerStyle={{
            backgroundColor: false,
            borderTopWidth: 0,
            borderBottomWidth: 0,
          }}
          searchIcon={{color: 'red'}}
        />
      </ScrollView>

      <View style={styles.titleContainer}>
        <Text style={styles.titleMain}>Go</Text>
        <Text style={[styles.titleMain, {marginTop: -30}]}>Near</Text>

        {/* Button */}
        <TouchableOpacity onPress={() => navigation.navigate('Search')}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>Explore nearby stays</Text>
          </View>
        </TouchableOpacity>
        {/* End Button */}
      </View>
    </ImageBackground>
  );
};

export default HomeScreen;
