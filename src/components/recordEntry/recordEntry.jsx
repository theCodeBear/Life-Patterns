'use strict';
import React from 'react';
import {render} from 'react-dom';
import store from '../../store/createStore';
import { addEntry } from '../../actions/actions';
import moment from 'moment';
import styles from './recordEntry.css';


class RecordEntry extends React.Component {
  constructor(props) {
    super(props);
    console.log('record entry props', this.props);
    this.state = {
      Completed: '',
      Number: '',
      Duration: '',
      Rating: '',
      'Time Of Day': '',
      Feeling: '',
      Money: '',
      Difficulty: '',
      List: '',
      note: ''
    };
    this.updateNumber = this.updateNumber.bind(this);
    this.updateTime = this.updateTime.bind(this);
    this.updateRating = this.updateRating.bind(this);
    this.updateDurationHours = this.updateDurationHours.bind(this);
    this.updateDurationMinutes = this.updateDurationMinutes.bind(this);
    this.updateDurationSeconds = this.updateDurationSeconds.bind(this);
    this.updateDuration = this.updateDuration.bind(this);
    this.updateFeeling = this.updateFeeling.bind(this);
    this.updateMoney = this.updateMoney.bind(this);
    this.updateDifficulty = this.updateDifficulty.bind(this);
    this.updateNote = this.updateNote.bind(this);
    this.recordHabit = this.recordHabit.bind(this);
    /* the data types
      Completed:      'Record that you did something',        
      Number:         '+/- 1,000,000,000',
      Duration:       'Hours:Minutes:Seconds',
      Rating:         '1 - 10',
      'Time Of Day':  'HH:MM AM/PM',
      Feeling:        'Awful, Bad, Mediocre, Good, Great',
      Money:          '+/- $1,000,000,000.00',
      Difficulty:     'Easy/Moderate/Hard',
      List:           'A list of things you did'
    */
  }

  updateNumber(e) {
    console.log('value', e.target.value);
    console.log('typeof', typeof +e.target.value);
    this.setState({Number: +e.target.value});
  }

  updateTime(e) {
    console.log('value', e.target.value);
    this.setState({'Time Of Day': e.target.value});
  }

  updateRating(e) {
    console.log('value', e.target.value);
    this.setState({Rating: e.target.value});
  }

  updateDurationHours(e) {
    console.log('value', e.target.value);
    this.updateDuration(e.target.value);
  }

  updateDurationMinutes(e) {
    console.log('value', e.target.value);
    this.updateDuration(null, e.target.value);
  }

  updateDurationSeconds(e) {
    console.log('value', e.target.value);
    this.updateDuration(null, null, e.target.value);
  }

  updateDuration(hours, minutes, seconds) {
    console.log('update duration', hours, minutes, seconds);
    // this.setStatea({Duration: });
  }

  updateFeeling(e) {
    console.log('value', e.target.value);
    this.setState({Feeling: e.target.value});
  }

  updateMoney(e) {
    console.log('value', e.target.value);
    this.setState({Money: e.target.value});
  }

  updateDifficulty(e) {
    console.log('value', e.target.value);
    this.setState({Difficulty: e.target.value});
  }

  updateNote(e) {
    if (e.target.value.length > 100) {
      console.log('note too long', e.target.value, this.state.note);
      return;
    }
    console.log('value', e.target.value);
    this.setState({note: e.target.value});
  }

  recordHabit(e) {
    console.log('recording habit');
    e.preventDefault();
    console.log('the state', this.state[this.props.dataType]);
    store.dispatch(addEntry({
      name: this.props.habit,
      dataType: this.props.dataType,
      value: this.state[this.props.dataType],
      note: this.state.note,
      date: moment().format('MM/DD/YYYY')
    }));
    if (this.props.dataType === 'Completed')
      this.setState({Completed: true});
    this.props.closeHabitEntry();
  }

  render() {
    console.log('state', this.state);
    let testing = false//true
    return (
      <div className={styles.backdrop}>
        <div className={styles.formContainer}>
          <button onClick={this.props.closeHabitEntry} className={styles.close}>X</button>
          <div style={{fontSize: '1.5em'}}>Record {this.props.habit} Entry</div>
          <form onSubmit={this.recordHabit}>
            {/* date input for month, day, and year inputs, from today back maybe a week or month */}

            {/* this.props.dataType === 'Completed' ? <input type='number' placeholder='Number' /> : '' */}
            { this.props.dataType === 'Number' ||testing ? <input type='number' className={styles.input} value={this.state.Number} placeholder='Number' onChange={this.updateNumber} /> : '' }
            { this.props.dataType === 'Time Of Day' ||testing ? <input type='time' className={styles.input} value={this.state['Time Of Day']} onChange={this.updateTime} /> : '' }
            { this.props.dataType === 'Rating' ||testing ? <input type='number' className={styles.input} max='10' min='1' value={this.state.Rating} placeholder='Rating' onChange={this.updateRating} /> : '' }
            {
              this.props.dataType === 'Duration' ||testing ?
                <div>
                  <input type='number' placeholder='HH' min='0' max='23' onChange={this.updateDurationHours} />
                  <input type='number' placeholder='MM' min='0' max='59' onChange={this.updateDurationMinutes} />
                  <input type='number' placeholder='SS' min='0' max='60' onChange={this.updateDurationSeconds} />
                </div>
              : ''
            }
            {
              this.props.dataType === 'Feeling' ||testing ?
                <select value={this.state.Feeling} className={styles.input} onChange={this.updateFeeling}>
                  <option value='null'></option>
                  <option value='Awful'>Awful</option>
                  <option value='Bad'>Bad</option>
                  <option value='Mediocre'>Mediocre</option>
                  <option value='Good'>Good</option>
                  <option value='Great'>Great</option>
                </select>
              : ''
            }
            { this.props.dataType === 'Money' ||testing ? <input type='number' className={styles.input} value={this.state.Money} placeholder='Dollar Amount' onChange={this.updateMoney} /> : '' }
            {
              this.props.dataType === 'Difficulty' ||testing ?
                <select value={this.state.Difficulty} className={styles.input} onChange={this.updateDifficulty}>
                  <option value='null'></option>
                  <option value='Easy'>Easy</option>
                  <option value='Moderate'>Moderate</option>
                  <option value='Hard'>Hard</option>
                </select>
              : ''
            }
            {/* this.props.dataType === 'List' ? <input type='number' placeholder='Number' /> : '' */}
            <textarea className={styles.textarea} value={this.state.note} onChange={this.updateNote} placeholder='Record Optional Brief Note' />
            <button className={styles.submit} type='submit'>Record Habit</button>
          </form>
        </div>
      </div>
    );
  }
}

export default RecordEntry;