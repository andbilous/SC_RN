/* eslint-disable no-unused-vars */
// @flow
import React from 'react';
import { SafeAreaView } from 'react-native';
import { Provider } from 'react-redux';
// import FlatList from './src/components/FlatList';
// import LongFlatList from './src/components/LongFlatList';
import ProductForm from './src/components/ProductForm';
import FlatListTaskWithHooks from './src/components/FlatList';
import UserInfoForm from './src/components/UserInfoForm';
import CardDetails from './src/components/CardDetails';
import { store } from './src/redux/store';

class App extends React.PureComponent {
  render() {
    return (
      <Provider store={store}>
        <SafeAreaView>
          <UserInfoForm />
          {/* <CardDetails /> */}
          {/* <FlatListTaskWithHooks /> */}
          {/* <LongFlatList/> */}
          {/* <ProductForm /> */}
        </SafeAreaView>
      </Provider>
    );
  }
}

export default App;
