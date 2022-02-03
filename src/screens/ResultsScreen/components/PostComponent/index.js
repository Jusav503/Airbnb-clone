import {View, Image, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import AntDesign from 'react-native-vector-icons/AntDesign';

import styles from './styles';

const PostComponent = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{
          uri: 'https://img.jamesedition.com/listing_images/2020/02/27/14/16/01/1fa8e07f-7a76-4c16-82d8-31e26cb1005f/je/1000x620xc.jpg',
        }}
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
        <Text style={styles.smallText}>1bed · 1bedroom</Text>
        <Text style={styles.principalText} numberOfLines={2}>
          Entire flat · Puerto de la Cruz Bonito estudio con vistas a las
          montañas, muy iluminado, con terraza
        </Text>
        <Text style={styles.priceText}>$43 / night</Text>
        <Text style={styles.totalPriceText}>$216 Total</Text>
      </View>
    </View>
  );
};

export default PostComponent;
