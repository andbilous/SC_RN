import React from 'react';
import {
  FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View
} from 'react-native';
import useFlatListWithHooks from './useFlatListWithHooks';

const styles = StyleSheet.create({
  input: {
    height: 40, borderColor: 'gray', borderWidth: 1, marginTop: 10, width: 300, alignSelf: 'center',
  },

  selectedItem: {
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10,
  },
  item: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 2,
  },
  listContainer: {
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#336633',
    paddingTop: 4,
    paddingBottom: 4,
    paddingRight: 25,
    paddingLeft: 25,
    marginTop: 10,
    width: 300,
    alignSelf: 'center',
  },
});


const FlatListTaskWithHooks = () => {
  const {
    dataFromServer,
    textInput,
    handleInputChange,
    handleAddItem,
    handleDeleteItem,
    handleSelectItem
  } = useFlatListWithHooks();

  const renderItem = (item) => (
    <View>
      <TouchableOpacity
        style={item.isSelected ? styles.selectedItem : styles.item}
        onPress={() => handleSelectItem(item.key)}
      >
        <Text>{item.name}</Text>
      </TouchableOpacity>
    </View>
  );


  return (
    <View style={styles.listContainer}>
      <FlatList
        data={dataFromServer}
        extraData={dataFromServer}
        keyExtractor={(item) => item.key.toString()}
        renderItem={({ item }) => renderItem(item)}
      />
      <TextInput
        style={styles.input}
        placeholder="Item name"
        value={textInput}
        onChangeText={(text) => handleInputChange(text)}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleAddItem}
      >
        <Text>Add Item</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={handleDeleteItem}
      >
        <Text>Delete Item</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FlatListTaskWithHooks;
