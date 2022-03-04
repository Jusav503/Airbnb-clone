import {View} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';
import { colors } from 'react-native-elements';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';

import SuggestionSearch from './components/SuggestionSearch';

const SearchScreen = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex:1}}>
      <GooglePlacesAutocomplete
        placeholderTextColor={colors.grey1}
        placeholder="Where are you going?"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          // console.log(data, details);
          navigation.navigate("Guests")
        }}
        query={{
          key: 'AIzaSyCriKhEFH4n8QNd0VrFPIW4FgwuQmWhVBQ',
          language: 'en',
          type: '(cities)',
        }}
        renderRow={item => <SuggestionSearch item={item} />}
        styles={{
          textInputContainer: {paddingHorizontal: 10, paddingTop: 10},
          separator: {height: 0},
          textInput:{color:"grey"},
        }}
      />
    </View>
  );
};

export default SearchScreen;
