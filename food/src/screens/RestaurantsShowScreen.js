import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Image, FlatList } from 'react-native';
import yelp from '../api/yelp';

const RestaurantsShowScreen = ({ navigation }) => {
  const [result, setResult] = useState(null);
  const id = navigation.getParam('id');

  // Call yelp Api to get the restaurant data
  const getRestaurant = async (id) => {
    const responce = await yelp.get(`/${id}`);
    setResult(responce.data);
  };

  // Get initial data
  useEffect(() => {
    getRestaurant(id);
  }, []);

  if (!result) {
    return null;
  }

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => {
          return <Image style={styles.image} source={{ uri: item }} />
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: 200,
    width: 300
  }
});

export default RestaurantsShowScreen;