import {View, FlatList, Dimensions} from 'react-native';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import React, {useState, useEffect, useRef} from 'react';

import places from '../../../assets/dummyData/feed';
import Header from '../../components/Header';
import MarkerComponent from './components/MarkerComponent';
import MapListPostComponent from './components/MapListPostComponent';

const ResultsScreen = () => {
  const [selectedPlaceId, setSelectedPlaceId] = useState(null);
  const flatlist = useRef();
  const map = useRef();

  const viewConfig = useRef({
    waitForInteraction: false,
    itemVisiblePercentThreshold: 70,
  });
  const onViewChanged = useRef(({viewableItems}) => {
    if (viewableItems.length > 0) {
      const selectedPlace = viewableItems[0].item;
      setSelectedPlaceId(selectedPlace.id);
    }
  });

  useEffect(() => {
    if (!selectedPlaceId || !flatlist) {
      return;
    }
    const index = places.findIndex(place => place.id === selectedPlaceId);
    flatlist.current.scrollToIndex({index});

    const selectedPlace = places[index];
    const region = {
      latitude: selectedPlace.coordinate.latitude,
      longitude: selectedPlace.coordinate.longitude,
      latitudeDelta: 0.8,
      longitudeDelta: 0.8,
    };
    map.current.animateToRegion(region);
  }, [selectedPlaceId]);

  const WIDTH = Dimensions.get('window').width;
  return (
    <View style={{width: '100%', height: '100%'}}>
      <Header />
      <MapView
        ref={map}
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
      
      <View style={{position: 'absolute', bottom: 30}}>
        <FlatList
          ref={flatlist}
          data={places}
          horizontal
          snapToInterval={WIDTH - 70}
          decelerationRate={'fast'}
          viewabilityConfig={viewConfig.current}
          onViewableItemsChanged={onViewChanged.current}
          renderItem={({item}) => <MapListPostComponent post={item} />}
          showsHorizontalScrollIndicator={false}
        />
      </View>
    </View>
  );
};

export default ResultsScreen;
