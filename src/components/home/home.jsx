'use strict';
import React from 'react';
import {render} from 'react-dom';
import Navigator from '../navigator/navigator.jsx';
import store from '../../store/createStore';
import HabitList from '../habitList/habitList.jsx';
import HabitDetail from '../habitDetail/habitDetail.jsx';
import styles from './home.css';

let Home = (props) => (
  <div>
    <Navigator />
    <h1> Home {store.getState().user.name} </h1>
    <div>
      <HabitList />
    </div>
    <div className={styles['habit-detail-container']}>
      <HabitDetail />
    </div>
  </div>
);

export default Home;
