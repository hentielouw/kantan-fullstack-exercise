import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export const JobsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Jobs Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
