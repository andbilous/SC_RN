import React from 'react';
import {
  TouchableOpacity, View, Text, StyleSheet
} from 'react-native';
// import { createAppContainer } from 'react-navigation';
// import { createBottomTabNavigator } from 'react-navigation-tabs';
// import FormTemplate from './FormTemplate';
// import connect from 'react-redux';


const styles = StyleSheet.create({
  buttonStyle: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#336633',
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: 25,
    paddingLeft: 25,
    marginTop: 10,
    width: 300
  }
});

const UserInfoFormContainer = () => (
  <View>
    <TouchableOpacity style={styles.buttonStyle}><Text>Create</Text></TouchableOpacity>
    <TouchableOpacity style={styles.buttonStyle}><Text>Edit</Text></TouchableOpacity>
  </View>
);

export { UserInfoFormContainer as UserInfoForm };
