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

const ListPostComponent = props => {
  const {image, bed, bedroom, totalPrice, type, title, newPrice, oldPrice} =
    props.post;

  return (
    <View style={styles.container}>
      <Image source={{uri: image}} style={styles.image} />

      <View style={styles.infoContainer}>
        {/* <TouchableOpacity style={styles.favoriteIcon}>
          <AntDesign
            name="heart"
            // name="hearto"
            color="red"
            size={30}
          />
        </TouchableOpacity> */}

        <Text style={{color: 'grey'}}>
          {bed}bed · {bedroom}bedroom
        </Text>

        <Text style={styles.principalText} numberOfLines={2}>
          {type} · {title}
        </Text>

        <Text style={styles.priceText}>${newPrice} / night</Text>
      </View>
    </View>
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
    marginLeft:15
  },
  favoriteIcon: {},
  image: {
    width: 100,
    height: 100,
  },
  infoContainer: {
    padding: 5,
  },
  principalText: {
    color: 'black',
    width:WIDTH-180,
  },
  priceText: {color: 'grey', fontWeight: 'bold'},
  totalPriceText: {
    color: 'grey',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
