import {View, Text, StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const GuestsScreen = () => {
  return (
    <View>
      <View style={styles.headerContainer}>
        <AntDesign name="left" size={25} />
        <View style={{alignItems: 'center', marginHorizontal: '20%'}}>
          <Text style={styles.principalTitle}>Tenerife, Spain</Text>
          <Text>11-14 Dec</Text>
        </View>
      </View>

      <View style={styles.mainContainer}>
        <View style={styles.section}>
          <View style={styles.infoContainer}>
            <Text style={styles.principalTitle}>Adults</Text>
            <Text>Ages 13 or above</Text>
          </View>

          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.menusPlusIconContainer}>
              <Text style={styles.menusPlusIcon}>-</Text>
            </TouchableOpacity>
            <Text style={{fontSize:25}}>0</Text>
            <TouchableOpacity style={styles.menusPlusIconContainer}>
              <Text style={styles.menusPlusIcon}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.infoContainer}>
            <Text style={styles.principalTitle}>Children</Text>
            <Text>Ages 2-12</Text>
          </View>

          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.menusPlusIconContainer}>
              <Text style={styles.menusPlusIcon}>-</Text>
            </TouchableOpacity>
            <Text style={{fontSize:25}}>0</Text>
            <TouchableOpacity style={styles.menusPlusIconContainer}>
              <Text style={styles.menusPlusIcon}>+</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.infoContainer}>
            <Text style={styles.principalTitle}>Infants</Text>
            <Text>Under 2</Text>
          </View>

          <View style={styles.quantityContainer}>
            <TouchableOpacity style={styles.menusPlusIconContainer}>
              <Text style={styles.menusPlusIcon}>-</Text>
            </TouchableOpacity>
            <Text style={{fontSize:25}}>0</Text>
            <TouchableOpacity style={styles.menusPlusIconContainer}>
              <Text style={styles.menusPlusIcon}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

const WIDTH = Dimensions.get('window').width;
const HEIGHT = Dimensions.get('window').height;
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

  mainContainer: {
    padding: 10,
  },
  section: { 
    padding: 20,
    flexDirection: 'row',
    borderTopWidth: 0.2,
    borderBottomWidth: 0.2,
    borderTopColor: 'grey',
    borderBottomColor: 'grey',
  },
  infoContainer:{
    flex:2,
  },
  quantityContainer: {
    flex:1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  menusPlusIconContainer: {
    borderRadius: 55,
    borderWidth: 1,
    width: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'grey',
    marginHorizontal: 10,
  },
  menusPlusIcon: {
    color: 'grey',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default GuestsScreen;
