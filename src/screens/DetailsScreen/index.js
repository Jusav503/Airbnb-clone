import {View} from 'react-native';
import React from 'react';

import PostComponent from '../../components/Post/PostDetailsComponent';
import { useRoute } from '@react-navigation/native';
import feed from '../../../assets/dummyData/feed';

const SearchScreen = () => {

  const route = useRoute()
  const posts = feed.find(place => place.id === route.params.postId)

  return (
    <View style={{flex:1}}>
      <PostComponent post={posts} />
    </View>
  );
};

export default SearchScreen;
