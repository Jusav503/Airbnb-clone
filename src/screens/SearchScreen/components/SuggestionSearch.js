import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const SuggestionSearch = ({item}) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Guests")}>
      <View style={styles.container}>
        <View style={styles.iconContainer}>
          <MaterialIcons name="location-pin" color="grey" size={20} />
        </View>
        <View style={styles.descriptionContainer}>
          <Text numberOfLines={1}>{item.description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  iconContainer: {
    flex: 1,
  },
  descriptionContainer: {
    flex: 8,
  },
});

export default SuggestionSearch;
