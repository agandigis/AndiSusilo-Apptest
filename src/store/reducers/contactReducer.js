import { ALL_CONTACTS, SINGLE_CONTACT } from "../actions/actionType";

const initialState = { allContacts: [], singleContact: {} };

function contactReducer(state = initialState, action) {
  switch (action.type) {
    case ALL_CONTACTS:
      return { ...state, allContacts: action.payload };
    case SINGLE_CONTACT:
      return { ...state, singleContact: action.payload };
    default:
      return state;
  }
}

export default contactReducer;
