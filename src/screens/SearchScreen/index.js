import {View, ScrollView} from 'react-native';
import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import SuggestionSearch from './components/SuggestionSearch';

const SearchScreen = () => {
  return (
    <View style={{flex:1}}>
      <GooglePlacesAutocomplete
        placeholder="Where are you going?"
        onPress={(data, details = null) => {
          // 'details' is provided when fetchDetails = true
          console.log(data, details);
        }}
        query={{
          key: 'AIzaSyCB9iarDoL9LLLSKQdWH13vt-fUDDw8vBk',
          language: 'en',
          type: '(cities)',
        }}
        renderRow={item => <SuggestionSearch item={item} />}
        styles={{
          textInputContainer: {paddingHorizontal: 10, paddingTop: 10},
          separator: {height: 0},
        }}
      />
    </View>
  );
};

export default SearchScreen;
