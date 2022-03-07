import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import feed from '../../../assets/dummyData/feed';
import PostComponent from '../../components/Post/PostComponent';

const ExploreScreen = () => {
  return (
    <View>
      <FlatList
        data={feed}
        renderItem={({item}) => <PostComponent post={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default ExploreScreen;

const styles = StyleSheet.create({});
