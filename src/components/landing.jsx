'use strict';
import React from 'react';
import {render} from 'react-dom';
import Navigator from './navigator.jsx';
import Login from './login.jsx';

let Landing = (props) => (
  <div>
    <Navigator />
    <h1> Landing </h1>

    <Login />
  </div>
);

export default Landing;
