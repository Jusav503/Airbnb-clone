import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const GuestsScreen = () => {
  const [adults, setAdults] = useState(0);
  const [childrens, setChildrens] = useState(0);
  const [infants, setInfants] = useState(0);

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
            <TouchableOpacity onPress={() => setAdults(Math.max(0, adults - 1))}>
              <AntDesign name="minuscircleo" size={25} style={{opacity: adults ? 1 : 0.3}}/>
            </TouchableOpacity>

            <Text style={{fontSize: 20, marginHorizontal: 10}}>{adults}</Text>

            <TouchableOpacity onPress={() => setAdults(Math.max(adults + 1))}>
              <AntDesign name="pluscircleo" size={25}/>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.infoContainer}>
            <Text style={styles.principalTitle}>Children</Text>
            <Text>Ages 2-12</Text>
          </View>
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={() => setChildrens(Math.max(0, childrens - 1))}>
              <AntDesign name="minuscircleo" size={25} style={{opacity: childrens ? 1 : 0.3}}/>
            </TouchableOpacity>

            <Text style={{fontSize: 20, marginHorizontal: 10}}>{childrens}</Text>

            <TouchableOpacity onPress={() => setChildrens(Math.max(childrens + 1))}>
              <AntDesign name="pluscircleo" size={25}/>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.infoContainer}>
            <Text style={styles.principalTitle}>Infants</Text>
            <Text>Under 2</Text>
          </View>
          <View style={styles.quantityContainer}>
            <TouchableOpacity onPress={() => setInfants(Math.max(0, infants - 1))}>
              <AntDesign name="minuscircleo" size={25} style={{opacity: infants ? 1 : 0.3}}/>
            </TouchableOpacity>

            <Text style={{fontSize: 20, marginHorizontal: 10}}>{infants}</Text>

            <TouchableOpacity onPress={() => setInfants(Math.max(infants + 1))}>
              <AntDesign name="pluscircleo" size={25}/>
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
  infoContainer: {
    flex: 2,
  },
  quantityContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

export default GuestsScreen;
