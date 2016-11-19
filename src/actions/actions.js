'use strict';

import store from '../store/createStore';


// Action Creators

const fakeAddUser = (username) => {
  return {
    type: 'FAKE_ADD_USER',
    name: username
  };
};

const addHabit = (habit) => {
  return {
    type: 'ADD_HABIT',
    habit: habit
  };
};


export {
  fakeAddUser,
  addHabit
};