import { useCallback, useState } from 'react';

const useProductForm = () => {
  const [name, setName] = useState('');
  const [weight, setWeight] = useState(0);
  const [size, setSize] = useState(0);
  const [madeIn, setMadeIn] = useState('');
  const [createBtnDisabled, setCreateBtnDisabled] = useState(false);
  const [editBtnDisabled, setEditBtnDisabled] = useState(false);
  const [enabledFields, setEnabledFields] = useState(false);
  const handleChangeName = useCallback((value) => {
    setName(value);
  }, [name]);
  const handleChangeWeight = useCallback((value) => {
    setWeight(value);
  },);
  const handleChangeSize = useCallback((value) => {
    setSize(value);
  }, [size]);
  const handleChangeMadeIn = useCallback((value) => {
    setMadeIn(value);
  }, [madeIn]);
  const handleOnEdit = useCallback(() => {
    setCreateBtnDisabled(true);
    setEnabledFields(true);
  },);
  const handleOnSubmit = useCallback(() => {
    setEnabledFields(false);
    setEditBtnDisabled(true);
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
