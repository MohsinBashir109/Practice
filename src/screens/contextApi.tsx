import React, { createContext, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Child from './child';

export const counterContext = createContext<any>(null);

const ContextApiComponent = () => {
  const [counter, setCounter] = useState(0);
  const incrementCounter = () => {
    setCounter(counter + 1);
  };
  //console.log(counterContext);
  return (
    <counterContext.Provider value={{ counter, incrementCounter }}>
      <Child />
    </counterContext.Provider>
  );
};

export default ContextApiComponent;

const styles = StyleSheet.create({});
