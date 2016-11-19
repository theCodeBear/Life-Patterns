'use strict';
import React from 'react';
import {render} from 'react-dom';
import store from '../../store/createStore';
import styles from './habitList.css';


class HabitList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { habitList: store.getState().habitList };
    store.subscribe(() => {
      console.log('new store', store.getState());
      this.setState({habitList: store.getState().habitList});
    });
  }

  render() {
    let showAddHabit = false;
    const showAdd = () => showAddHabit = !showAddHabit;
    return (
      <div className={styles.list}>
        <h2>Habits Tracked</h2>
        <button type='button' onClick={this.props.showHabit}>+</button>
        { !this.state.habitList.length ? <div>Tracking No Habits</div> : '' }
        { this.state.habitList.map((el,i) => <div className={styles.item} key={i}>{el.name}</div>) }
      </div>
    );
  }
}

export default HabitList;