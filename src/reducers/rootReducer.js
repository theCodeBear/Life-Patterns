'use strict';

// import sub-reducers here:
import userReducer from './userReducer';
import habitListReducer from './habitListReducer';


const initialState = {
  user: {},
  habitList: [{name:'Pushups', dataType: 'Number'}],
  habitData: {
    Pushups: [
      { date: '11/1/2016', value: 138 },
      { date: '11/3/2016', value: 78 },
      { date: '11/4/2016', value: 200 },
      { date: '11/6/2016', value: 240 },
      { date: '11/7/2016', value: 287 },
      { date: '11/11/2016', value: 148 },
      { date: '11/12/2016', value: 199 },
      { date: '11/13/2016', value: 130 },
      { date: '11/17/2016', value: 178 },
      { date: '11/18/2016', value: 250 },
      { date: '11/19/2016', value: 100 }
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