import {View, FlatList} from 'react-native';
import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import {useState} from 'react';

import PostComponent from './components/PostComponent';
import places from '../../../assets/dummyData/feed';
import Header from '../../components/Header';
import MarkerComponent from './components/MarkerComponent';
import ListPostComponent from './components/ListPostComponent';

const ResultsScreen = () => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);

  return (
    <View style={{width: '100%', height: '100%'}}>
      <Header />
      {/* <FlatList
        data={feed}
        renderItem={({item}) => <PostComponent post={item} />}
        keyExtractor={item => item.id}
      /> */}
      <MapView
        style={{flex: 1}}
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 28.3279822,
          longitude: -16.5124847,
          latitudeDelta: 0.8,
          longitudeDelta: 0.8,
        }}>
        {places.map(place => (
          <MarkerComponent
            coordinate={place.coordinate}
            price={place.newPrice}
            isSelected={place.id === selectedPlaceId}
            onPress={() => setSelectedPlaceId(place.id)}
          />
        ))}
      </MapView>
      <View style={{position: 'absolute', bottom: 25, left:10}}>
        <ListPostComponent post={places[1]} />
      </View>
    </View>
  );
};

export default ResultsScreen;
