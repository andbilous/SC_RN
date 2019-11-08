import { useCallback, useState } from 'react';
import { Alert } from 'react-native';

const useProductForm = () => {
  const [name, setName] = useState('');
  const [weight, setWeight] = useState(0);
  const [size, setSize] = useState(0);
  const [madeIn, setMadeIn] = useState('');
  const [createBtnDisabled, setCreateBtnDisabled] = useState(false);
  const [editBtnDisabled, setEditBtnDisabled] = useState(true);
  const [enabledFields, setEnabledFields] = useState(true);

  const handleChangeName = useCallback((value) => {
    setName(value);
  }, []);
  const handleChangeWeight = useCallback((value) => {
    setWeight(value);
  },);
  const handleChangeSize = useCallback((value) => {
    setSize(value);
  }, []);
  const handleChangeMadeIn = useCallback((value) => {
    setMadeIn(value);
  }, []);
  const handleOnEdit = useCallback(() => {
    setCreateBtnDisabled(true);
    setEnabledFields(true);
  },);
  const handleOnSubmit = useCallback(() => {
    Alert.alert('Form Submitted.Click Edit to edit Fields');
    setEnabledFields(false);
    setEditBtnDisabled(false);
  },);
  return {
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
  };
};

export default useProductForm;
