/* eslint-disable no-shadow */
import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Picker
} from 'react-native';
import useProductForm from './useProductForm';


const ProductForm = () => {
  const {
    name,
    weight,
    size,
    madeIn,
    handleChangeName,
    handleChangeWeight,
    handleChangeSize,
    handleChangeMadeIn,
    createBtnDisabled,
    editBtnDisabled,
    enabledFields,
    handleOnEdit,
    handleOnSubmit
  } = useProductForm();
  return (
    <View style={styles.container}>
      <Image
        style={styles.bgImage}
        source={{ uri: 'https://lorempixel.com/900/1400/nightlife/8/' }}
      />

      <View style={styles.buttonContainer}>
        <TouchableOpacity
          disabled={createBtnDisabled}
          style={
                createBtnDisabled
                  ? [styles.buttonContainer, styles.disabledBtn]
                  : styles.buttonContainer
              }
          onPress={handleOnSubmit}
        >
          <Text style={styles.loginText}>Create</Text>
        </TouchableOpacity>

        <TouchableOpacity
          disabled={editBtnDisabled}
          style={
                editBtnDisabled
                  ? [styles.buttonContainer, styles.disabledBtn]
                  : styles.buttonContainer
              }
          onPress={handleOnEdit}
        >
          <Text style={styles.loginText}>Edit</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          value={name}
          editable={enabledFields}
          placeholder="Name"
          underlineColorAndroid="transparent"
          onChangeText={handleChangeName}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          value={weight}
          editable={enabledFields}
          placeholder="Weight"
          keyboardType="numeric"
          underlineColorAndroid="transparent"
          onChangeText={handleChangeWeight}
        />
      </View>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.inputs}
          editable={enabledFields}
          value={size}
          placeholder="Size"
          keyboardType="numeric"
          underlineColorAndroid="transparent"
          onChangeText={handleChangeSize}
        />
      </View>

      <Picker
        enabled={enabledFields}
        selectedValue={madeIn}
        style={{ height: 50, width: 50 }}
        onValueChange={handleChangeMadeIn}
      >
        <Picker.Item label="USA" value="us" />
        <Picker.Item label="Ukraine" value="ukr" />
        <Picker.Item label="China" value="ch" />
      </Picker>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#DCDCDC',
    marginTop: 100
  },
  inputContainer: {
    borderBottomColor: '#F5FCFF',
    backgroundColor: '#FFFFFF',
    borderRadius: 30,
    borderBottomWidth: 1,
    width: 300,
    height: 45,
    marginBottom: 20,
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'flex-start',

    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5
  },
  inputs: {
    height: 45,
    marginLeft: 16,
    borderBottomColor: '#FFFFFF',
    flex: 1
  },
  inputIcon: {
    width: 30,
    height: 30,
    marginRight: 15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 200,
    borderRadius: 30,
    backgroundColor: 'transparent'
  },
  btnByRegister: {
    height: 15,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
    width: 300,
    backgroundColor: 'transparent'
  },
  loginButton: {
    backgroundColor: '#00b5ec',

    shadowColor: '#808080',
    shadowOffset: {
      width: 0,
      height: 9
    },
    shadowOpacity: 0.5,
    shadowRadius: 12.35,

    elevation: 19
  },
  loginText: {
    color: 'white'
  },
  bgImage: {
    flex: 1,
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  },
  btnText: {
    color: 'white',
    fontWeight: 'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {
      width: -1,
      height: 1
    },
    textShadowRadius: 10
  },
  textByRegister: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {
      width: -1,
      height: 1
    },
    textShadowRadius: 10
  },
  disabledBtn: {
    backgroundColor: 'grey'
  }
});

export default ProductForm;
