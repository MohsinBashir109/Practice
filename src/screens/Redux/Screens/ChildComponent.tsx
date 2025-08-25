import { Button, StyleSheet, Text, TextInput, View } from 'react-native';
import React, { useEffect, useState } from 'react';
import { decrement, increment, reset } from '../slice/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

import { setInfo } from '../userSlice';

const ChildComponent = () => {
  const counter = useSelector((state: any) => state.counter.value);
  const users = useSelector((state: any) => state.user);
  useEffect(() => {
    console?.log(users);
    console?.log('====================================');
  }, []);
  const [details, setDetails] = useState({
    email: '',
    userName: '',
    contact: '',
  });

  const dispatch = useDispatch();
  return (
    <View>
      <Text>Counter : {counter}</Text>
      <Button
        title="incremet"
        onPress={() => {
          dispatch(increment());
        }}
      />
      <Button
        title="Decremet"
        onPress={() => {
          dispatch(decrement());
        }}
      />
      <Button
        title="reset"
        onPress={() => {
          dispatch(reset());
        }}
      />
      <TextInput
        placeholder="Email"
        style={{ width: '100%', backgroundColor: 'pink' }}
        value={details.email}
        onChangeText={text => setDetails({ ...details, email: text })}
      />
      <TextInput
        placeholder="Contact"
        style={{ width: '100%', backgroundColor: 'pink' }}
        value={details.contact}
        onChangeText={text => setDetails({ ...details, contact: text })}
      />
      <TextInput
        placeholder="Username"
        style={{ width: '100%', backgroundColor: 'pink' }}
        value={details.userName}
        onChangeText={text => setDetails({ ...details, userName: text })}
      />
      <Text>{users.email}</Text>
      <Text>{users.contact}</Text>
      <Text>{users.userName}</Text>
      <Button
        title="set"
        onPress={() => {
          dispatch(
            setInfo({
              email: details.email,
              userName: details.userName,
              contact: details.contact,
            }),
          );
        }}
      />{' '}
      <Button
        title="reset"
        onPress={() => {
          dispatch(reset());
        }}
      />
    </View>
  );
};

export default ChildComponent;

const styles = StyleSheet.create({});
