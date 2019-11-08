import React from 'react';
import {
  TouchableOpacity, View, Text, StyleSheet, TextInput
} from 'react-native';


const FormTemplate = () => (
  <View>
      <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={}
          value={'Name'}
      />
      <TextInput
          style={{ height: 40, borderColor: 'gray', borderWidth: 1 }}
          onChangeText={text => onChangeText(text)}
          value={''}
      />
  </View>
);

export default FormTemplate;
