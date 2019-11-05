/* eslint-disable prettier/prettier */
import React from 'react';
import {
  FlatList, TextInput, View, Text, TouchableOpacity, StyleSheet
} from 'react-native';

export default class FlatListTask extends React.Component {
  constructor() {
    super();
    this.state = {
      userList: [],
      textInput: '',
      lastIndex: 0,
    };
  }


  componentDidMount() {
    this.fetchData();
  }

  incrementIndexCounter() {
    this.setState({
      lastIndex: this.state.lastIndex + 1,
    });
  }

  onChangeInput=(text) => {
    this.setState({
      textInput: text,
    });
  };

  onAddItem() {
    const { userList, textInput,lastIndex } = this.state;
    if (!textInput) { return; }
    this.setState({
      userList: [...userList,
        { key: lastIndex, name: textInput, isSelected: false },
      ],
    });
    this.incrementIndexCounter();
    this.clearInput();
  }

    fetchData=() => {
      fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((data) => {
          const dataFromServer = [];
          data.forEach((element) => {
            dataFromServer.push({
              key: element.email,
              name: element.name,
              isSelected: false,
            });
          });

          this.setState({
            userList: dataFromServer.slice(),
          });
        }).catch((err) => console.log(err));
    }

  onDeleteItem=() => {
    const selected = this.state.userList.filter((item) => item.isSelected !== true);
    this.setState({
      userList: selected,
    });
  }

  selectItem=(key) => {
    const { userList } = this.state;
    const userListWithSelectedUsers = userList.map((user) => {
      if (user.key === key) {
        user.isSelected = true;
      }
      return user;
    });
    this.setState({
      userList: userListWithSelectedUsers,
    });
  }

  clearInput=() => {
    this.setState({
      textInput: '',
    });
  }

  renderItem=(item) => (
    <View>
      <TouchableOpacity style={item.isSelected ? styles.selectedItem : styles.item} onPress={() => this.selectItem(item.key)}><Text>{item.name}</Text></TouchableOpacity>
    </View>
  )

  render() {
    return (
      <View style={styles.listContainer}>
        <FlatList
          data={this.state.userList}
          extraData={this.state}
          keyExtractor={(item) => item.key}
          renderItem={({ item }) => this.renderItem(item)}
        />
        <TextInput style={styles.input} placeholder="Item name" value={this.state.textInput} onChangeText={(text) => this.onChangeInput(text)} />
        <TouchableOpacity style={styles.button} onPress={() => this.onAddItem()}><Text>Add Item</Text></TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => this.onDeleteItem()}><Text>Delete Item</Text></TouchableOpacity>
      </View>
    );
  }
}

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
