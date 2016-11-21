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
    name: habit.name,
    dataType: habit.dataType
  };
};

const addEntry = (entry) => {
  return {
    type: 'ADD_ENTRY',
    name: entry.name,
    dataType: entry.dataType,
    value: entry.value,
    note: entry.note,
    date: entry.date
  };
};


export {
  fakeAddUser,
  addHabit,
  addEntry
};