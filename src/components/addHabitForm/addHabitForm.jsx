'use strict';
import React from 'react';
import {render} from 'react-dom';
import styles from './addHabitForm.css';


class AddHabitForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitHabit = this.submitHabit.bind(this);
  }

  submitHabit(e) {
    e.preventDefault();
    store.dispatch(addHabit(this.refs.habitName.value));
    this.refs.habitName.value = '';
  }

  render() {
    const trackData = ['Number', 'Rating', 'Completed'];
    return (
      <div className={styles.backdrop}>
        <div className={styles.formContainer}>
          <button onClick={this.props.closeHabit} className={styles.close}>X</button>
          <form onSubmit={this.submitHabit}>
            <input type='text' ref='habitName' placeholder='New Habit Name' />
            <br />
            <select>
              <option value='null'></option>
              { trackData.map((el,i) => <option value={el} key={i}>{el}</option>) }
            </select>
            <br />
            <button type='submit' className={styles.submit}>Add Habit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default AddHabitForm;