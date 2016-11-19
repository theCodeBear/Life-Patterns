'use strict';

const habitListReducer = (currentState = [], action) => {
  let nextState;

  switch(action.type) {
    case 'ADD_HABIT':
      nextState = currentState.slice();
      nextState.push({
        name: action.name,
        dataType: action.dataType
      });
      return nextState;
    default:
      return currentState;
  }
};

export default habitListReducer;