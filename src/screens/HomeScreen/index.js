import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';

import styles from './styles';
import {SearchBar} from 'react-native-elements';

const HomeScreen = () => {
  console.log("home")
  return (
    <View>
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
          <TouchableOpacity>
            <View style={styles.button}>
              <Text style={styles.buttonText}>Explore nearby stays</Text>
            </View>
          </TouchableOpacity>
          {/* End Button */}
        </View>
      </ImageBackground>
    </View>
  );
};

export default HomeScreen;
