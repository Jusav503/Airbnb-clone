import {View, Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './styles';

const PostComponent = (props) => {
  const{image, bed, bedroom, totalPrice, type, title, newPrice, oldPrice}= props.post;
  
  return (
    <View style={styles.container}>
      <Image
        source={{uri: image}}
        style={styles.image}
      />
      <TouchableOpacity style={styles.favoriteIcon}>
        <AntDesign
          name="heart"
          // name="hearto"
          color="white"
          size={30}
        />
      </TouchableOpacity>

      <View style={styles.infoContainer}>
        <Text style={styles.smallText}>{bed}bed · {bedroom}bedroom</Text>
        <Text style={styles.principalText} numberOfLines={2}>{type} · {title}</Text>
        <Text style={styles.priceText}>${newPrice} / night</Text>
        <Text style={styles.totalPriceText}>${totalPrice} Total</Text>
      </View>

      <View style={styles.separator} />
    </View>
  );
};

export default PostComponent;
