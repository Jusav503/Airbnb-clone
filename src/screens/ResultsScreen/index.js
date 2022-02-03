import { View, Text, FlatList } from 'react-native';
import React from 'react';
import PostComponent from './components/PostComponent';
import feed from '../../../assets/dummyData/feed';

const ResultsScreen = () => {
  return (
    <View>
      <FlatList
        data={feed}
        renderItem={({item}) => <PostComponent post={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ResultsScreen;
