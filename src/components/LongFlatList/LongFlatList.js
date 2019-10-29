/* eslint-disable react/destructuring-assignment */
/* eslint-disable no-plusplus */
/* eslint-disable class-methods-use-this */
//  @flow
import React from 'react';
import {View, StyleSheet, FlatList, Text, Image} from 'react-native';

type Props = {
  dataToRender: [],
};

// const LongFlatList = (props: Props) => (
const LongFlatList = ({dataToRender}: Props) => {
  console.log(dataToRender);
  return (
    <FlatList
      numColumns={2}
      data={dataToRender}
      renderItem={({item}) => (
        <View key={item.firstName} style={styles.listItem}>
          <Text>Number : {item.number}</Text>
          <Text>Firstname : {item.firstName}</Text>
          <Text>Lastname : {item.lastName}</Text>
          <Image
            style={styles.image}
            source={{
              uri: `https://picsum.photos/id/${Math.floor(
                Math.random() * 100,
              )}/150/150`,
            }}
          />
        </View>
      )}
      keyExtractor={(item, index) => index.toString()}
    />
  );
};
const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    margin: 5,
    minWidth: 170,
    maxWidth: 223,
    height: 304,
    maxHeight: 304,
    backgroundColor: '#CCC',
  },
  image: {
    width: 180,
    height: 250,
  },
});
export default LongFlatList;
