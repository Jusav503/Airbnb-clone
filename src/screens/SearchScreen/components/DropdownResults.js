import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const DropdownResults = props => {
  const {description} = props.title;
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <MaterialIcons name="location-pin" color="grey" size={20} />
      </View>
      <View style={styles.descriptionContainer}>
        <Text numberOfLines={1}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 40,
    paddingVertical: 10,
    backgroundColor: 'white',
  },
  iconContainer: {
    flex: 1,
  },
  descriptionContainer: {
    flex: 8,
  },
});

export default DropdownResults;
