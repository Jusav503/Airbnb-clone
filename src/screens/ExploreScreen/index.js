import { View, FlatList} from 'react-native';
import React, {useState, useEffect} from 'react';
import {API, graphqlOperation} from 'aws-amplify';
import {listPosts} from '../../graphql/queries';

import PostComponent from '../../components/Post/PostComponent';

const ExploreScreen = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const fetchedPosts = await API.graphql(graphqlOperation(listPosts));
        setPosts(fetchedPosts.data.listPosts.items);
      } catch (e) {
        console.log(e);
      }
    };

    fetchPosts();
  }, []);

  return (
    <View>
      <FlatList
        data={posts}
        renderItem={({item}) => <PostComponent post={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default ExploreScreen;
