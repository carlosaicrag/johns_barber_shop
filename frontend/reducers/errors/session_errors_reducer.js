import { RECEIVE_ERRORS, CLEAR_ERRORS } from '../../actions/session_actions';

// keeps tracks of session-specific errors
export const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  // return nothing if we hit default case
  const noErrors = [];

  switch (action.type) {
    case RECEIVE_ERRORS:
      return action.errors;
    case CLEAR_ERRORS:
      return [];
    default:
      return noErrors;
  }
};