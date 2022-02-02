import {Dimensions, StyleSheet} from 'react-native';

const HEIGHT = Dimensions.get('window').height;
const WIDTH = Dimensions.get('window').width;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: HEIGHT,
  },
  titleContainer: {
    padding: 30,
    position: 'absolute',
    top:HEIGHT/5
  },
  titleMain: {
    color: 'white',
    fontSize: 80,
    fontWeight: 'bold',
  },
  button: {
    marginTop: 30,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    alignSelf: 'flex-start',
  },
  buttonText: {color: 'black', fontWeight: 'bold', letterSpacing: 0.5, fontSize: 15},
});

export default styles;
