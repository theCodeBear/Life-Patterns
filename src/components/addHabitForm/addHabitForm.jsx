'use strict';
import React from 'react';
import {render} from 'react-dom';
import store from '../../store/createStore';
import { addHabit } from '../../actions/actions';
import styles from './addHabitForm.css';


class AddHabitForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { habitName: null, habitDataType: null };

    this.submitHabit = this.submitHabit.bind(this);
    this.changeName = this.changeName.bind(this);
    this.changeDataType = this.changeDataType.bind(this);
  }

  changeName(e) {
    this.setState({habitName: e.target.value});
  }

  changeDataType(e) {
    this.setState({habitDataType: e.target.value});
  }

  submitHabit(e) {
    e.preventDefault();
    if (!this.state.habitName || !this.state.habitDataType) return;
    const habit = { name: this.state.habitName, dataType: this.state.habitDataType };
    store.dispatch(addHabit(habit));
    this.props.closeHabit();
  }

  render() {
    // should I make it so they can choose 2 types of data (like number and time for running) ??
    const trackData = ['Number', 'Rating', 'Completed', 'Time'];
    const valid = this.state.habitName && this.state.habitDataType;
    const submitClass = `${styles.submit} ${!valid ? styles.invalid : ''}`;

    return (
      <div className={styles.backdrop}>
        <div className={styles.formContainer}>
          <button onClick={this.props.closeHabit} className={styles.close}>X</button>
          <form onSubmit={this.submitHabit}>
            <input type='text' onBlur={this.changeName} placeholder='New Habit Name' />
            <br />
            <select onChange={this.changeDataType}>
              <option value='null'></option>
              { trackData.map((el,i) => <option value={el} key={i}>{el}</option>) }
            </select>
            <br />
            <button type='submit' className={submitClass}>Add Habit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddHabitForm;