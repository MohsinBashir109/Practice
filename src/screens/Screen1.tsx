import { StyleSheet, Text, View } from 'react-native';

import ContacListScreen from './ContacListScreen';
import ContextApiComponent from './contextApi';
import Grid from './Grid';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';

const Screen1 = () => {
  // const data = ['mohsin', 'ali', 'hamza', 'saif'];
  // const filtereArray = data.filter(item => item === 'mohsin');
  // console.log(filtereArray);

  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* <Props data={data} /> */}
      {/* <FlatLIstComponent /> */}
      {/* <SectionLIstComponent /> */}
      {/* <ContacListScreen /> */}
      {/* <Grid /> */}
      <ContextApiComponent />
    </SafeAreaView>
  );
};

export default Screen1;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
});
