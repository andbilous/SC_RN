// flow
import FormActionTypes from './creditCardInfo.types';

type State = { data: Object, submitResult:string, isLoading:boolean, errors:Array };

type SubmitFormRequestAction = { type: FormActionTypes.SUBMIT_FORM_REQUEST, isLoading: boolean };
type SubmitFormSuccessAction = { type: FormActionTypes.SUBMIT_FORM_SUCCESS, submitResult:String };
type SubmitFormFailureAction = { type: FormActionTypes.SUBMIT_FORM_FAILURE, errors: Array };

type Action = SubmitFormRequestAction | SubmitFormSuccessAction | SubmitFormFailureAction ;


const initialValues = {
  data: {
    cardNumber: undefined,
    expDate: undefined,
    cvv: undefined,
    firstName: '',
    lastName: '',
    secretQuestion: '',
    secretAnswer: '',
  },
  submitResult: '',
  isLoading: false,
  errors: []
};

// eslint-disable-next-line import/prefer-default-export
export const creditCardInfoReducer = (state:State = initialValues, action:Action) => {
  switch (action.type) {
    case FormActionTypes.SUBMIT_FORM_REQUEST:
      return {
        ...state,
        isLoading: true
      };

    case FormActionTypes.SUBMIT_FORM_SUCCESS:
      return {
        ...state,
        isLoading: false,
        submitResult: action.payload
      };

    case FormActionTypes.SUBMIT_FORM_FAILURE:
      return {
        ...state,
        isLoading: false,
        submitResult: 'Submit Error. Please Fix Validation Errors',
        errors: action.payload
      };

    default:
      return state;
  }
};
