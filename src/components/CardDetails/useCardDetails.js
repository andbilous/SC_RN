import { useState, useCallback } from 'react';
import CreditCardInfoService from '../../services/CreditCardInfoService';


const useCardDetails = () => {
  const [values, setValues] = useState([]);
  const [submitResult, setSubmitResult] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const handleSubmit = useCallback((formValues) => {
    setValues(formValues);
    setIsLoading(true);
    new CreditCardInfoService().submit()
      .then(() => { setSubmitResult('success'); setIsLoading(false); }).catch(() => setSubmitResult('error'));
  }, []);
  return {
    values, handleSubmit, submitResult, isLoading,
  };
};

export default useCardDetails;
