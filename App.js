/* eslint-disable no-unused-vars */
// @flow
import React from 'react';
import {SafeAreaView} from 'react-native';
import {Provider} from 'react-redux';
import Formik from './src/components/Formik';
import ProductForm from './src/components/ProductForm';
// import LongFlatListContainer from './src/components/LongFlatList/LongFlatListContainer';
import LongFlatList from './src/components/LongFlatList';
import {store} from './src/redux/store';

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView>
          <ProductForm />
          {/* <LongFlatListContainer /> */}
          {/* <LongFlatList /> */}
        </SafeAreaView>
      </Provider>
    );
  }
}

export default App;
