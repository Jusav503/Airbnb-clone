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
import {useNavigation} from '@react-navigation/native';

const PostComponent = props => {
  const navigation = useNavigation();
  const {id, image, bed, bedroom, type, title, newPrice} = props.post;

  return (
    <ScrollView>
      <TouchableOpacity
        onPress={() => navigation.navigate('Details', {postId: id})}>
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
            <Text style={styles.priceText}>${newPrice}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
};

export default PostComponent;

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
    paddingTop: 5,
    paddingHorizontal: 10,
    width: '100%',
  },
  principalText: {
    color: 'black',
    fontSize: 19,
  },
  priceText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 18,
    padding: 7,
    backgroundColor: '#e95357',
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
    alignSelf: 'flex-start',

    position: 'absolute',
    top: -50,
    right: 0,
  },
  totalPriceText: {
    color: 'grey',
    fontWeight: 'bold',
    textDecorationLine: 'underline',
  },
});
