import { ScrollView, StyleSheet, Text, View } from 'react-native';

import React from 'react';
import gridData from '../../data/GridData';

const Grid = () => {
  return (
    <ScrollView contentContainerStyle={styles.containerScroll}>
      {gridData.map((item: any) => (
        <View style={styles.gridItem} key={item.id}>
          <Text>{item.tittle}</Text>
        </View>
      ))}
    </ScrollView>
  );
};

export default Grid;

const styles = StyleSheet.create({
  containerScroll: {
    flexDirection: 'row',
    justifyContent: 'center',
    padding: 10,
    flexWrap: 'wrap',
  },
  mainContainer: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  headindg: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#000',
  },
  gridItem: {
    backgroundColor: '#ff6f61',
    padding: 20,

    width: '40%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 12,
    margin: 10,
  },
});
