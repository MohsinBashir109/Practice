import { Button, StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useState } from 'react';

import { useEvent } from 'react-native-reanimated';

const UseEffect = () => {
  const [count, setcount] = useState(0);
  const [count2, setcount2] = useState(0);
  console.log('render');
  useEffect(() => {
    console?.log('hjfgghjfghfghf', count);
  }, [count]);
  return (
    <View>
      <Text>{count}</Text>
      <Button title="in" onPress={() => setcount(count + 1)} />
      <Button title="de" onPress={() => setcount(count - 1)} />
      <Button title="in2" onPress={() => setcount2(count2 + 1)} />
      <Button title="de2" onPress={() => setcount2(count2 - 1)} />
    </View>
  );
};

export default UseEffect;

const styles = StyleSheet.create({});
