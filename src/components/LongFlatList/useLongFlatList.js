import { useEffect, useState } from 'react';

const useLongFlatList = () => {
  const [dataToRender, setDataToRender] = useState([]);
  useEffect(() => {
    fetch('https://picsum.photos/v2/list?page=2&limit=50')
      .then((response) => response.json())
      .then((data) => {
        const dataFromServer = [];
        data.forEach((element) => {
          dataFromServer.push({
            key: element.id,
            name: element.author,
            url: element.url
          });
        });
        setDataToRender(dataFromServer.slice());
      })
      .catch((err) => console.log(err));
  });
  return { dataToRender };
};

export default useLongFlatList;
