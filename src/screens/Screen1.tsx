import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import ContacListScreen from './ContacListScreen';
import ContextApiComponent from './contextApi';
import Grid from './Grid';
import ParentComponent from './Redux/Screens/ParentComponent';
import { SafeAreaView } from 'react-native-safe-area-context';
import TextImput from '../../component/TextImput';

const Screen1 = () => {
  // const data = ['mohsin', 'ali', 'hamza', 'saif'];
  // const filtereArray = data.filter(item => item === 'mohsin');
  // console.log(filtereArray);
  const [input, setInput] = useState('');
  useEffect(() => {
    console.log('parentrender');
    console.log(input);
  }, []);

  return (
    <SafeAreaView style={styles.mainContainer}>
      {/* <Props data={data} /> */}
      {/* <FlatLIstComponent /> */}
      {/* <SectionLIstComponent /> */}
      {/* <ContacListScreen /> */}
      {/* <Grid /> */}
      {/* <ContextApiComponent /> */}
      {/* <ParentComponent /> */}
      <TextImput
        placeHolder="Email"
        containerStyle={styles.textInput}
        onTextChange={text => setInput(text)}
        value={input}
      />
    </SafeAreaView>
  );
};

export default Screen1;
const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: '#f8f9fa',
  },
  textInput: {
    backgroundColor: 'pink',
    borderRadius: 1,
    width: '100%',
    height: 50,
  },
});
