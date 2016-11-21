'use strict';
import React from 'react';
import {render} from 'react-dom';
import store from '../../store/createStore';
import HabitList from '../habitList/habitList.jsx';
import HabitDetail from '../habitDetail/habitDetail.jsx';
import AddHabitForm from '../addHabitForm/addHabitForm.jsx';
import RecordEntry from '../recordEntry/recordEntry.jsx';
import styles from './home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showAddHabitForm: false, showHabitEntryForm: false, viewingHabit: null };
    this.toggleAddHabitForm = this.toggleAddHabitForm.bind(this);
    this.toggleHabitEntryForm = this.toggleHabitEntryForm.bind(this);
    this.displayHabitData = this.displayHabitData.bind(this);
    this.getHabitdata = this.getHabitData.bind(this);
  }

  toggleAddHabitForm() {
    this.setState({showAddHabitForm: !this.state.showAddHabitForm});
  }

  toggleHabitEntryForm() {
    this.setState({showHabitEntryForm: !this.state.showHabitEntryForm});
  }

  displayHabitData(habit) {
    this.setState({viewingHabit: habit});
  }

  getHabitData() {
    // return 'Completed';
    let habitIndex = store.getState().habitList.findIndex(el => el.name === this.state.viewingHabit);
    return store.getState().habitList[habitIndex].dataType;
  }

  render() {
    console.log('RERENDER HOME');
    return (
      <div>
        <h1> Home {store.getState().user.name} </h1>
        <div>
          <HabitList showAddHabit={this.toggleAddHabitForm} habitGraph={this.displayHabitData}/>
        </div>
        <div className={styles['habit-detail-container']}>
          <HabitDetail habit={this.state.viewingHabit} data={store.getState().habitData[this.state.viewingHabit]} toggleHabitEntry={this.toggleHabitEntryForm} />
        </div>
        { this.state.showAddHabitForm ? <AddHabitForm closeAddHabit={this.toggleAddHabitForm} /> : '' }
        { this.state.showHabitEntryForm ? <RecordEntry habit={this.state.viewingHabit} dataType={this.getHabitData()} closeHabitEntry={this.toggleHabitEntryForm} /> : '' }
      </div>
    );
  }
}

export default Home;
