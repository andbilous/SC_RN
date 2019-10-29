/* eslint-disable no-plusplus */
import React from 'react';
import LongFlatList from './LongFlatList';

class LongFlatListContainer extends React.PureComponent<Props, State> {
  render() {
    const data = [];
    const length = 10;

    for (let i = 0; i < length; i++) {
      data.push({
        number: i + 1,
        firstName: `Name${Math.floor(Math.random() * 100)}`,
        lastName: 'Doe',
        pictureNumber: 4,
      });
    }
    return <LongFlatList dataToRender={data} />;
  }
}
export default LongFlatListContainer;
