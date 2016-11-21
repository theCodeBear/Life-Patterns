'use strict';

// import sub-reducers here:
import userReducer from './userReducer';
import habitListReducer from './habitListReducer';
import habitDataReducer from './habitdataReducer';


const initialState = {
  user: {},
  habitList: [{name:'Pushups', dataType: 'Number'}],
  habitData: {
    Pushups: [
      { date: '11/01/2016', value: 138 },
      { date: '11/03/2016', value: 78 },
      { date: '11/04/2016', value: 200 },
      { date: '11/06/2016', value: 240 },
      { date: '11/19/2016', value: 100 },
      { date: '11/07/2016', value: 287 },
      { date: '11/11/2016', value: 148 },
      { date: '11/12/2016', value: 199 },
      { date: '11/13/2016', value: 130 },
      { date: '11/17/2016', value: 178 },
      { date: '11/18/2016', value: 250 },
      { date: '11/03/2016', value: 208 }
    ]
  }
};

const rootReducer = (currentState = initialState, action) => {
  var state = {
    user: userReducer(currentState.user, action),
    habitList: habitListReducer(currentState.habitList, action),
    habitData: habitDataReducer(currentState.habitData, action)
  };
  return state;
};

export default rootReducer;