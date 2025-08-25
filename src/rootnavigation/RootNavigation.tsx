import { StatusBar, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import Screen1 from '../screens/Screen1';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const MyStack = createNativeStackNavigator();
const RootNavigation = () => {
  return (
    <NavigationContainer>
      <StatusBar
        translucent={true}
        // barStyle="light-content"
        backgroundColor="transparent"
      />
      <MyStack.Navigator screenOptions={{ headerShown: false }}>
        <MyStack.Screen name="Screen1" component={Screen1} />
      </MyStack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
