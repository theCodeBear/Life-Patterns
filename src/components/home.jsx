'use strict';
import React from 'react';
import {render} from 'react-dom';
import Navigator from './navigator.jsx';
import store from '../store/createStore';
import HabitList from './habitList.jsx';

let Home = (props) => (
  <div>
    <Navigator />
    <h1> Home {store.getState().user.name} </h1>
    <div>
      <HabitList />
    </div>
  </div>
);

export default Home;
