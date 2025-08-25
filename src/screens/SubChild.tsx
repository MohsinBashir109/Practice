import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useContext } from 'react';

import { counterContext } from './contextApi';

const SubChild = () => {
  const { counter, incrementCounter } = useContext(counterContext);
  return (
    <View>
      <Text>{counter}</Text>
      <Button title="press" onPress={incrementCounter} />
    </View>
  );
};

export default SubChild;

const styles = StyleSheet.create({});
