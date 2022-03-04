import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

const PostDetailsComponent = props => {
  const {
    image,
    bed,
    bedroom,
    totalPrice,
    type,
    title,
    newPrice,
    oldPrice,
    description,
  } = props.post;

  return (
    <ScrollView>
      <View style={styles.container}>
        <Image source={{uri: image}} style={styles.image} />
        <TouchableOpacity style={styles.favoriteIcon}>
          <AntDesign
            name="heart"
            // name="hearto"
            color="white"
            size={30}
          />
        </TouchableOpacity>

        <View style={styles.infoContainer}>
          <Text style={{color: 'grey'}}>
            {bed}bed · {bedroom}bedroom
          </Text>
          <Text style={styles.principalText} numberOfLines={2}>
            {type} · {title}
          </Text>
          <Text style={styles.priceText}>${newPrice} / night</Text>
          <Text style={styles.totalPriceText}>${totalPrice} Total</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default PostDetailsComponent;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    alignItems: 'center',
    borderColor: 'grey',
    borderBottomWidth: 0.2,
    borderRadius: 15,
  },
  favoriteIcon: {
    position: 'absolute',
    top: 25,
    right: 30,
  },
  image: {
    width: '100%',
    aspectRatio: 3 / 2,
    borderRadius: 10,
  },
  infoContainer: {
    paddingTop: 10,
    paddingHorizontal: 5,
  },
  principalText: {
    color: 'black',
    fontSize: 19,
  },
  priceText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 18,
    paddingVertical: 5,
  },
  totalPriceText: {
    color: 'grey',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
  description: {
    color: 'black',
    lineHeight: 20,
    paddingTop: 10,
  },
});
