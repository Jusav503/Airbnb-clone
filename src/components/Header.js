import {Dimensions,StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useNavigation} from '@react-navigation/native';

const Header = ({title, subtitle}) => {
  const navigation = useNavigation();

  return (
    <View style={styles.headerContainer}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <AntDesign name="left" size={25} />
      </TouchableOpacity>
      <View style={{alignItems: 'center', marginHorizontal: '20%'}}>
        <Text style={styles.principalTitle}>{title}</Text>
        <Text>{subtitle}</Text>
      </View>
    </View>
  );
};

export default Header;

const WIDTH = Dimensions.get('window').width

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    padding: 20,
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: WIDTH,
  },
  principalTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: 'black',
    letterSpacing: 0.4,
  },
});
