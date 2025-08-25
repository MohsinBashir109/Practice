import { StyleSheet, Text, View } from 'react-native';

import React from 'react';

const SectionItemCardHeader = ({ item }: any) => {
  return (
    <View style={styles.container}>
      <Text>{item.tittle}</Text>
    </View>
  );
};

export default SectionItemCardHeader;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'pink',
    margin: 10,
  },
});
