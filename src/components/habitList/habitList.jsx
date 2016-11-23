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
    return (
      <div className={styles.list}>
        <h2 className={styles.habitListTitle}>Your Habits</h2>
        <button type='button' className={styles.addHabit} onClick={this.props.showAddHabit}>+</button>
        { !this.state.habitList.length ? <div>Tracking No Habits</div> : '' }
        {
          this.state.habitList.map((el,i) =>
            <div className={styles.item} onClick={this.props.habitGraph.bind(this,el.name)} key={i}>{el.name}</div>
          )
        }
      </div>
    );
  }
}

export default HabitList;