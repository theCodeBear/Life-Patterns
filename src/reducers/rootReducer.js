'use strict';

// import sub-reducers here:
import userReducer from './userReducer';
import habitListReducer from './habitListReducer';


const initialState = {
  user: {},
  habitList: []
};

const rootReducer = (currentState = initialState, action) => {
  var state = {
    user: userReducer(currentState.user, action),
    habitList: habitListReducer(currentState.habitList, action)
  };
  return state;
};

export default rootReducer;