'use strict';
import React from 'react';
import {render} from 'react-dom';
import store from '../store/createStore';
import { addHabit } from '../actions/actions';


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
    let habitListCss = {
      width: 200,
      position: 'fixed',
      top: 95,
      bottom: 10,
      boxShadow: '0 3px 10px 1px gray',
      backgroundColor: 'whitesmoke'
    };

    return (
      <div style={habitListCss}>
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