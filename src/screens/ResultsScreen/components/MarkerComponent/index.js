import {StyleSheet, Text, } from 'react-native';
import React from 'react';
import {Marker} from 'react-native-maps';

const MarkerComponent = props => {
  const {coordinate, price, onPress, isSelected} = props;
  return (
    <Marker coordinate={coordinate} onPress={onPress}>
      <Text
        style={{
          ...styles.price,
          backgroundColor: isSelected ? 'black' : 'white',
          color: isSelected ? 'white' : 'black',
        }}>
        €{price}
      </Text>
    </Marker>
  );
};

export default MarkerComponent;

const styles = StyleSheet.create({
  price: {
    letterSpacing: 0.4,
    borderRadius: 20,
    padding: 5,
    borderWidth: 1,
    borderColor: 'grey',
    fontWeight: 'bold',
  },
});
