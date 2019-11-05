/* eslint-disable react/destructuring-assignment */
//  @flow
import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import useCardDetails from './useCardDetails';

const CardDetailsOutput = () => (
  <View>
    <Text style={useCardDetails().submitResult.toLowerCase().includes('error')
      ? styles.titleError : styles.titleSubmit}
    >
      {useCardDetails().submitResult}

    </Text>
  </View>
);
const styles = StyleSheet.create({
  titleSubmit: {
    fontSize: 18,
    borderBottomColor: '#ffffff',
    borderBottomWidth: 3,
    textAlign: 'center',
    marginBottom: 2
  },
  titleError: {
    fontSize: 18,
    backgroundColor: 'red',
    borderBottomColor: '#ffffff',
    borderBottomWidth: 3,
    textAlign: 'center',
    marginBottom: 2
  }
});
export default CardDetailsOutput;
