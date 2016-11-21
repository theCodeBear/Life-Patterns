'use strict';

const habitDataReducer = (currentState = {}, action) => {
  let nextState;

  switch(action.type) {
    case 'ADD_ENTRY':
      nextState = JSON.parse(JSON.stringify(currentState));
      console.log('next state', nextState);
      nextState[action.name].push({
        value: action.value,
        // note: action.note,
        date: action.date
      });
      return nextState;
    default:
      return currentState;
  }
};

export default habitDataReducer;