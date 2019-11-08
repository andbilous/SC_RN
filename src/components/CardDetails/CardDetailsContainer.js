/* eslint-disable react/destructuring-assignment */
//  @flow
import React from 'react';
import { connect } from 'react-redux';
import { View, ActivityIndicator } from 'react-native';
import { CardDetailsInput } from './CardDetailsInput';
import CardDetailsOutput from './CardDetailsOutput';

import useCardDetails from './useCardDetails';


const CardDetailsContainer = () => {
  const { isLoading } = useCardDetails();
  return (
    <View>
      {isLoading ? (
        <>
          <CardDetailsInput />
          <ActivityIndicator />
        </>
      ) : (
        <>
          <CardDetailsInput />
          <CardDetailsOutput />
        </>
      )}
    </View>
  );
};
const CardDetails = connect((state) => ({
  isLoading: state.creditCardInfoReducer.isLoading,
  submitResult: state.creditCardInfoReducer.submitResult,
}))(CardDetailsContainer);

// eslint-disable-next-line import/prefer-default-export
export default CardDetails;
