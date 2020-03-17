import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface Props {
  name: string;
  address: string;
  date: string;
}

export const Job = ({ name, address, date }: Props) => (
  <View style={styles.container}>
    <Text>{name}</Text>
    <Text>{address}</Text>
    <Text>{date}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
