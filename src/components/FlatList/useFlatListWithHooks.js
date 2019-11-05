import { useEffect, useState, useCallback } from 'react';

const useFlatListWithHooks = () => {
  const [textInput, setTextInput] = useState('');
  const [lastIndex, setLastIndex] = useState(0);
  const [dataFromServer, setDataFromServer] = useState([]);

  useEffect(() => {
    const preparedData = [];
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        data.forEach((element) => {
          preparedData.push({
            key: element.email,
            name: element.name,
            isSelected: false,
          });
        });
        setDataFromServer(preparedData);
      })
      .catch((err) => console.log(err));
  }, [dataFromServer]);

  const handleInputChange = useCallback((text) => {
    setTextInput(text);
  }, [textInput]);

  const handleAddItem = useCallback(() => {
    setDataFromServer([...dataFromServer, { key: lastIndex, name: textInput, isSelected: false }]);
    setLastIndex(lastIndex + 1);
    setTextInput('');
  }, [textInput, dataFromServer]);

  const handleDeleteItem = useCallback(() => {
    const selected = dataFromServer.filter((item) => item.isSelected !== true);
    setDataFromServer(selected);
  }, [dataFromServer]);

  const handleSelectItem = useCallback((key) => {
    setDataFromServer(dataFromServer.map((item) => {
      if (item.key === key) { item.isSelected = true; }
      return item;
    }));
  }, [dataFromServer]);


  return {
    dataFromServer,
    textInput,
    handleInputChange,
    handleAddItem,
    handleDeleteItem,
    handleSelectItem
  };
};

export default useFlatListWithHooks;
