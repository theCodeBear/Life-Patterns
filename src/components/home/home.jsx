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
    this.state = { showAddHabitForm: false, viewingHabit: null };
    this.toggleHabitForm = this.toggleHabitForm.bind(this);
    this.displayHabitData = this.displayHabitData.bind(this);
  }

  toggleHabitForm() {
    this.setState({showAddHabitForm: !this.state.showAddHabitForm});
  }

  displayHabitData(habit) {
    console.log('display habit data', habit);
    this.setState({viewingHabit: habit});
  }

  render() {
    return (
      <div>
        <Navigator />
        <h1> Home {store.getState().user.name} </h1>
        <div>
          <HabitList showAddHabit={this.toggleHabitForm} habitGraph={this.displayHabitData}/>
        </div>
        <div className={styles['habit-detail-container']}>
          <HabitDetail habit={this.state.viewingHabit} />
        </div>
        { this.state.showAddHabitForm ? <AddHabitForm closeAddHabit={this.toggleHabitForm} /> : '' }
      </div>
    );
  }
}

export default Home;
