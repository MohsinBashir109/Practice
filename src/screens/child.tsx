import React, { createContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import SubChild from './SubChild';

const Child = () => {
  return (
    <View>
      <SubChild />
    </View>
  );
};

export default Child;

const styles = StyleSheet.create({});
