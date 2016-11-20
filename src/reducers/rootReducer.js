'use strict';

// import sub-reducers here:
import userReducer from './userReducer';
import habitListReducer from './habitListReducer';


const initialState = {
  user: {},
  habitList: [{name:'Pushups', dataType: 'Number'}],
  habitData: {
    Pushups: [
      { date: '11/17/2016', value: 178, day: 1 },
      { date: '11/18/2016', value: 250, day: 2 },
      { date: '11/19/2016', value: 150, day: 3 }
    ]
  }
};

const rootReducer = (currentState = initialState, action) => {
  var state = {
    user: userReducer(currentState.user, action),
    habitList: habitListReducer(currentState.habitList, action),
    habitData: currentState.habitData
  };
  return state;
};

export default rootReducer;