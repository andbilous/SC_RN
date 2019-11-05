/* eslint-disable react/destructuring-assignment */
//  @flow
import React from 'react';
import { connect } from 'react-redux';
import { View, ActivityIndicator } from 'react-native';
import { CardDetailsInput } from './CardDetailsInput';
import CardDetailsOutput from './CardDetailsOutput';

import useCardDetails from './useCardDetails';


const Formik = () => (
  <View>
    {useCardDetails().isLoading ? (
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
const CardDetailsContainer = connect((state) => ({
  isLoading: state.creditCardInfoReducer.isLoading,
  submitResult: state.creditCardInfoReducer.submitResult,
}))(Formik);

// eslint-disable-next-line import/prefer-default-export
export { CardDetailsContainer as Formik };
