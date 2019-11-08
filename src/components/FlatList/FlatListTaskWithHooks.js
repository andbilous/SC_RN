import React from 'react';
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';
import useFlatListWithHooks from './useFlatListWithHooks';

const styles = StyleSheet.create({
  selectedItem: {
    alignItems: 'center',
    backgroundColor: 'green',
    padding: 10
  },
  item: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 2
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    width: 300,
    alignSelf: 'center'
  },
  listContainer: {
    marginBottom: 5
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
    alignSelf: 'center'
  }
});

const keyExtractor = (item) => item.id;


const FlatListTaskWithHooks = () => {
  const {
    dataFromServer,
    textInput,
    handleInputChange,
    handleAddItem,
    handleDeleteItem,
    handleChangeItem
  } = useFlatListWithHooks();

  const renderItem = ({ item }) => (
    <TouchableOpacity
      key={item.id}
      style={item.isSelected ? styles.selectedItem : styles.item}
      onPress={() => handleChangeItem(item.id)}
    >
      <Text>{item.name}</Text>
    </TouchableOpacity>
  );


  return (
    <View style={styles.listContainer}>
      <FlatList
        data={dataFromServer}
        keyExtractor={keyExtractor}
        renderItem={(item) => renderItem(item)}
      />
      <TextInput
        style={styles.input}
        placeholder="Item name"
        value={textInput}
        onChangeText={handleInputChange}
      />
      <TouchableOpacity style={styles.button} onPress={handleAddItem}>
        <Text>Add Item</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={handleDeleteItem}>
        <Text>Delete Item</Text>
      </TouchableOpacity>
    </View>
  );
};

export default FlatListTaskWithHooks;
