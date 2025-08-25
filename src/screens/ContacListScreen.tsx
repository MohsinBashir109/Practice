import { FlatList, StyleSheet, Text, View } from 'react-native';

import React from 'react';
import renderItem from '../../constants/RenderItem';
import users from '../../data/Contact';

const ContacListScreen = () => {
  return (
    <FlatList
      keyExtractor={(item: any) => item.id}
      data={users}
      renderItem={renderItem}
      ListHeaderComponent={<Text style={styles.textHeader}>Contact</Text>}
      contentContainerStyle={styles.list}
    />
  );
};

export default ContacListScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textHeader: {
    fontWeight: 'bold',
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 10,
  },
  list: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 20,
  },
});
