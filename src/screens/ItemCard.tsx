import { StyleSheet, Text, View } from 'react-native';

import React from 'react';

const ItemCard = ({ item }: any) => {
  return (
    <View style={styles.conatainer}>
      <Text>{item.tittle}</Text>
    </View>
  );
};

export default ItemCard;

const styles = StyleSheet.create({
  conatainer: {
    flex: 1,
    backgroundColor: 'pink',
    margin: 10,
  },
});
