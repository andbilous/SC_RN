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
            id: element.email,
            name: element.name,
            isSelected: false,
          });

          setDataFromServer(preparedData);
        });
      })
      .catch((err) => console.log(err));
  }, []);

  const handleInputChange = useCallback(
    (text) => {
      setTextInput(text);
    },
    []
  );

  const handleAddItem = useCallback(() => {
    if (!textInput) { return; }
    setDataFromServer([
      ...dataFromServer,
      { key: lastIndex, name: textInput, isSelected: false }
    ]);
    setLastIndex(lastIndex + 1);
    setTextInput('');
  }, [dataFromServer, lastIndex, textInput]);

  const handleDeleteItem = useCallback(() => {
    const selected = dataFromServer.filter((item) => item.isSelected !== true);
    setDataFromServer(selected);
  }, [dataFromServer]);

  const handleChangeItem = useCallback((id) => {
    const selectedItems = dataFromServer.map((item) => {
      if (item.id === id) { item.isSelected = true; }
      return item;
    });
    setDataFromServer(selectedItems);
  }, [dataFromServer]);

  return {
    dataFromServer,
    textInput,
    handleInputChange,
    handleAddItem,
    handleDeleteItem,
    handleChangeItem
  };
};

export default useFlatListWithHooks;
