import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import React, {useState} from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../../components/Header';
import {useNavigation} from '@react-navigation/native';

const GuestsScreen = () => {
  const [adults, setAdults] = useState(0);
  const [childrens, setChildrens] = useState(0);
  const [infants, setInfants] = useState(0);

  const navigation = useNavigation();
  return (
    <View>
      <Header title="Tenerife, Spain" subtitle="11-14 Dec" />

      <View style={styles.mainContainer}>
        <View style={styles.section}>
          <View style={styles.infoContainer}>
            <Text style={styles.principalTitle}>Adults</Text>
            <Text style={{color: 'grey'}}>Ages 13 or above</Text>
          </View>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              onPress={() => setAdults(Math.max(0, adults - 1))}>
              <AntDesign
                name="minuscircleo"
                size={23}
                style={{opacity: adults ? 1 : 0.3, color: 'black'}}
              />
            </TouchableOpacity>

            <Text style={{fontSize: 20, marginHorizontal: 10, color: 'black'}}>
              {adults}
            </Text>

            <TouchableOpacity onPress={() => setAdults(Math.max(adults + 1))}>
              <AntDesign
                name="pluscircleo"
                size={23}
                style={{color: 'black'}}
              />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.infoContainer}>
            <Text style={styles.principalTitle}>Children</Text>
            <Text style={{color: 'grey'}}>Ages 2-12</Text>
          </View>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              onPress={() => setChildrens(Math.max(0, childrens - 1))}>
              <AntDesign
                name="minuscircleo"
                size={23}
                style={{opacity: childrens ? 1 : 0.3, color: 'black'}}
              />
            </TouchableOpacity>

            <Text style={{fontSize: 20, marginHorizontal: 10, color: 'black'}}>
              {childrens}
            </Text>

            <TouchableOpacity
              onPress={() => setChildrens(Math.max(childrens + 1))}>
              <AntDesign name="pluscircleo" size={23} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.section}>
          <View style={styles.infoContainer}>
            <Text style={styles.principalTitle}>Infants</Text>
            <Text style={{color: 'grey'}}>Under 2</Text>
          </View>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              onPress={() => setInfants(Math.max(0, infants - 1))}>
              <AntDesign
                name="minuscircleo"
                size={23}
                style={{opacity: infants ? 1 : 0.3, color: 'black'}}
              />
            </TouchableOpacity>

            <Text style={{fontSize: 20, marginHorizontal: 10, color: 'black'}}>
              {infants}
            </Text>

            <TouchableOpacity onPress={() => setInfants(Math.max(infants + 1))}>
              <AntDesign name="pluscircleo" size={23} color="black" />
            </TouchableOpacity>
          </View>
        </View>

        <Button
          title="Search"
          onPress={() =>
            navigation.navigate('Results', {
              guests: adults + childrens + infants,
            })
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
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
    borderBottomWidth: 0.1,
    borderTopColor: 'grey',
    borderBottomColor: 'grey',
    borderRadius: 15,
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
