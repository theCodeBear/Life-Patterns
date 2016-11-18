'use strict';

const userReducer = (currentState = {}, action) => {
  let nextState;

  switch(action.type) {
    case 'FAKE_ADD_USER':
      nextState = { name: action.name };
      return nextState;
    default:
      return currentState;
  }
};

export default userReducer;