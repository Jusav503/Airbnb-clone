import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    alignItems: 'center',
    borderColor: 'grey',
    borderBottomWidth: 0.2,
    borderRadius: 10,
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
  smallText: {
    color: 'grey',
  },
  infoContainer: {
    paddingTop: 10,
    paddingHorizontal: 5,
  },
  principalText: {
    color: 'white',
    fontSize: 19,
  },
  priceText: {color: 'white', fontWeight: 'bold', fontSize: 20},
  totalPriceText: {fontWeight: 'bold', textDecorationLine: 'underline'},
});
export default styles;
