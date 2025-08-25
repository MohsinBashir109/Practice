import { FlatList, StyleSheet, Text, View } from 'react-native';

import ItemCard from './ItemCard';
import React from 'react';
import data from '../../data/Data';

data;

const FlatLIstComponent = () => {
  console.log('====================================');
  console.log(data);
  console.log('====================================');
  return (
    <FlatList
      // contentContainerStyle={{ borderRadius: 10, elevation: 2 }}
      data={data}
      renderItem={({ item }) => <ItemCard item={item} />}
    />
  );
};
export default FlatLIstComponent;

const styles = StyleSheet.create({});
