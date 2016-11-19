'use strict';
import React from 'react';
import {render} from 'react-dom';
import {Link} from 'react-router';


let Navigator = (props) => (
  <div>
    <Link to='/'>Landing</Link>
    <br />
    <Link to='/home'>Home</Link>
  </div>
);

export default Navigator;
