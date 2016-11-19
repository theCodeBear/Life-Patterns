'use strict';
import React from 'react';
import {render} from 'react-dom';
import Navigator from '../navigator/navigator.jsx';
import store from '../../store/createStore';
import HabitList from '../habitList/habitList.jsx';
import HabitDetail from '../habitDetail/habitDetail.jsx';
import AddHabitForm from '../addHabitForm/addHabitForm.jsx';
import styles from './home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showHabit: false };
    this.toggleHabitForm = this.toggleHabitForm.bind(this);
  }

  toggleHabitForm() {
    this.setState({showHabit: !this.state.showHabit});
  }

  render() {
    return (
      <div>
        <Navigator />
        <h1> Home {store.getState().user.name} </h1>
        <div>
          <HabitList showHabit={this.toggleHabitForm} />
        </div>
        <div className={styles['habit-detail-container']}>
          <HabitDetail />
        </div>
        { this.state.showHabit ? <AddHabitForm closeHabit={this.toggleHabitForm} /> : '' }
      </div>
    );
  }
}

export default Home;
