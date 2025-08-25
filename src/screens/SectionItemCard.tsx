import { StyleSheet, Text, View } from 'react-native';

import React from 'react';

const SectionItemCard = ({ item }: any) => {
  return (
    <View style={styles.container}>
      <Text>{item.name}</Text>
    </View>
  );
};

export default SectionItemCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    margin: 5,
  },
});
