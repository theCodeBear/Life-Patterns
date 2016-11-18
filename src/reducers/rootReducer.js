'use strict';

// import sub-reducers here:
import userReducer from './userReducer';


const initialState = {
  user: {}
};

const rootReducer = (currentState = initialState, action) => {
  var state = {
    user: userReducer(currentState.user, action)
  };
  return state;
};

export default rootReducer;