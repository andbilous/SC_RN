//  @flow
import React from 'react';
import {
  View, StyleSheet, FlatList, Text, Image
} from 'react-native';
import useLongFlatList from './useLongFlatList';


// rename dataToRender

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
const LongFlatList = () => (
  <FlatList
    numColumns={2}
    data={useLongFlatList().dataToRender}
    extraData={useLongFlatList().dataToRender}
    renderItem={({ item }) => (
      <View key={item.id} style={styles.listItem}>
        <Text>
Number :
          {item.id}
        </Text>
        <Text>
Name :
          {item.name}
        </Text>
        <Image
          style={styles.image}
          source={{
            uri: item.url,
          }}
        />
      </View>
    )}
    keyExtractor={(item, index) => index.toString()}
  />
);

export default LongFlatList;
