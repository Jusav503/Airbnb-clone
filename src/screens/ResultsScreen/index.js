import { View, FlatList } from 'react-native';
import React from 'react';
import PostComponent from './components/PostComponent';
import feed from '../../../assets/dummyData/feed';
import Header from '../../components/Header';
import MapView from 'react-native-maps';

const ResultsScreen = () => {
  return (
    <View style={{width:"100%", height:"100%"}}>
      <Header/>
      {/* <FlatList
        data={feed}
        renderItem={({item}) => <PostComponent post={item} />}
        keyExtractor={item => item.id}
      /> */}

      <MapView
        style={{flex:1,}}
        initialRegion={{
          latitude: 37.78825,
          longitude: -122.4324,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};

export default ResultsScreen;
