import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native';

const ListPostComponent = props => {
  const navigation = useNavigation();
  const { id, image, bed, bedroom, type, title, newPrice, } = props.post;

  return (
    <TouchableOpacity onPress={() => navigation.navigate("Details", { postId: id })}>
      <View style={styles.container}>
        <Image source={{uri: image}} style={styles.image} />
      
        <View style={styles.infoContainer}>
          <Text style={{color: 'grey'}}>
            {bed}bed · {bedroom}bedroom
          </Text>
      
          <Text style={styles.principalText} numberOfLines={2}>
            {type} · {title}
          </Text>
      
          <Text style={styles.priceText}>${newPrice} / night</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default ListPostComponent;

const WIDTH = Dimensions.get('window').width;
const styles = StyleSheet.create({
  container: {
    width: WIDTH - 70,
    alignItems: 'center',
    borderRadius: 10,
    backgroundColor: 'white',
    flexDirection: 'row',
    overflow: 'hidden',
    marginLeft: 15,
  },
  image: {
    width: 100,
    height: 100,
  },
  infoContainer: {
    padding: 5,
  },
  principalText: {
    color: 'black',
    width: WIDTH - 180,
  },
  priceText: {color: 'grey', fontWeight: 'bold'},
  totalPriceText: {
    color: 'grey',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
