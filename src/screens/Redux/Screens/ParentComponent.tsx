import { StyleSheet, Text, View } from 'react-native';

import ChildComponent from './ChildComponent';
import React from 'react';

const ParentComponent = () => {
  return (
    <View>
      <ChildComponent />
    </View>
  );
};

export default ParentComponent;

const styles = StyleSheet.create({});
