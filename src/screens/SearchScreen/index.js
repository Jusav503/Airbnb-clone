import {View, Text, ScrollView, TouchableOpacity, FlatList} from 'react-native';
import React from 'react';
import {SearchBar} from 'react-native-elements/dist/searchbar/SearchBar';
import search from '../../../assets/dummyData/search';
import DropdownResults from './components/DropdownResults';

const SearchScreen = () => {
  
  return (
    <View>
      <ScrollView>
        <SearchBar
          placeholder="Where are you going?"
          round={true}
          containerStyle={{
            backgroundColor: 'white',
            borderTopWidth: 0,
            borderBottomWidth: 0,
          }}
          searchIcon={{color: 'red'}}
        />
      </ScrollView>

      <View>
        <FlatList
          data={search}
          renderItem={({item}) => <DropdownResults title={item} />}
          keyExtractor={item => item.id}
        />
      </View>
    </View>
  );
};

export default SearchScreen;
