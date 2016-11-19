'use strict';

const habitListReducer = (currentState = [], action) => {
  let nextState;

  switch(action.type) {
    case 'ADD_HABIT':
      nextState = currentState.slice();
      nextState.push(action.habit);
      return nextState;
    default:
      return currentState;
  }
};

export default habitListReducer;