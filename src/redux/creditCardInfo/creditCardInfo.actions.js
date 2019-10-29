// flow
import FormActionTypes from './creditCardInfo.types';
import CreditCardInfoService from '../../services/CreditCardInfoService';


type submitFormRequestAction = { type: FormActionTypes.SUBMIT_FORM_REQUEST };
type submitFormRequestSuccessAction = { type: FormActionTypes.SUBMIT_FORM_SUCCESS, result: string };
type submitFormRequestFailureAction = { type: FormActionTypes.SUBMIT_FORM_FAILURE, err:Array };

// eslint-disable-next-line import/prefer-default-export
export const submitForm = (creditCardInfoData) => (dispatch) => {
  dispatch(submitFormRequest());
  const creditCardService = new CreditCardInfoService(creditCardInfoData);
  creditCardService.submit()
    .then(() => { dispatch(submitFormSuccess('Form Submitted')); })
    .catch(() => { dispatch(submitFormFailure(creditCardService.getErrors())); });
};

const submitFormRequest = ():submitFormRequestAction => ({
  type: FormActionTypes.SUBMIT_FORM_REQUEST
});

const submitFormSuccess = (result):submitFormRequestSuccessAction => ({
  type: FormActionTypes.SUBMIT_FORM_SUCCESS,
  payload: result
});


const submitFormFailure = (err):submitFormRequestFailureAction => ({
  type: FormActionTypes.SUBMIT_FORM_FAILURE,
  payload: err
});
