'use strict';
import React from 'react';
import {render} from 'react-dom';
import store from '../../store/createStore';
import { addHabit } from '../../actions/actions';
import styles from './habitList.css';


class HabitList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { habitList: store.getState().habitList };
    this.submitHabit = this.submitHabit.bind(this);
    store.subscribe(() => {
      console.log('new store', store.getState());
      this.setState({habitList: store.getState().habitList});
    });
  }

  submitHabit(e) {
    e.preventDefault();
    store.dispatch(addHabit(this.refs.habitName.value));
    this.refs.habitName.value = '';
  }

  render() {
    return (
      <div className={styles.list}>
        <h2>Habits Tracked</h2>
        <form onSubmit={this.submitHabit}>
          <input type='text' ref='habitName' placeholder='New Habit Name' />
          <button type='submit'>Add Habit</button>
        </form>
        { !this.state.habitList.length ? <div>Tracking No Habits</div> : '' }
        { this.state.habitList.map((el,i) => <div key={i}>{el}</div>) }
      </div>
    );
  }
}

export default HabitList;