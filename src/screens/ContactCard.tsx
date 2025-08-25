import { StyleSheet, Text, View } from 'react-native';

import React from 'react';

const ContactCard = ({ name, email }: any) => {
  return (
    <View style={styles.item}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.email}>{email}</Text>
    </View>
  );
};

export default ContactCard;

const styles = StyleSheet.create({
  item: {
    backgroundColor: 'crimson',
    marginVertical: 20,
    borderRadius: 10,
    padding: 10,
  },
  name: {
    color: 'white',
    fontSize: 16,
    fontWeight: '800',
  },
  email: {
    color: 'white',
    fontSize: 14,
    fontWeight: '500',
  },
});
