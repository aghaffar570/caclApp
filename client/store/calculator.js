import axios from 'axios';

const initialState = {
  operation: '',
  result: ''
}

// action types
const GET_OPERATION = 'GET_OPERATION';

// action creator
export function getOperation (operation) {
  const action = { type: GET_OPERATION, operation };
  return action;
};

export function postOperation (op) {
  console.log('OP in the store!@#!@$!$', op)
  return function thunk (dispatch) {
    dispatch(getOperation(op))
    // return axios.post('/api/calc', { operation, value })
    //   .then(res => res.data)
    //   .then(operations => {
    //     const action = getOperation(operations);
    //     dispatch(action);
    //   });
  };
};

// reducer
export default function calculatorReducer (state = initialState, action) {
  switch (action.type) {
    case GET_OPERATION:
      return action.operation;
    default:
      return state;
  };
};