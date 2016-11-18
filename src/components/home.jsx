'use strict';
import React from 'react';
import {render} from 'react-dom';
import Navigator from './navigator.jsx';
import store from '../store/createStore';

let Home = (props) => (
  <div>
    <Navigator />
    <h1> Home {store.getState().user.name} </h1>
  </div>
);

export default Home;
