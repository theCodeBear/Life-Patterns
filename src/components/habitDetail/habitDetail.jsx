'use strict';
import React from 'react';
import {render} from 'react-dom';
import store from '../../store/createStore';
import SnakeGraph from '../snakeGraph/snakeGraph.jsx';
import SnakeGraph2 from '../snakeGraph2/snakeGraph2.jsx';
import MainGraph from '../mainGraph/mainGraph.jsx';
import styles from './habitDetail.css';

class HabitDetail extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {
          this.props.habit ?
            <div>
              <h2 className={styles.habitTitle}>{this.props.habit}</h2>
              <button onClick={this.props.toggleHabitEntry}>Add Entry</button>
              {/*<SnakeGraph habit={this.props.habit} />*/}
              <SnakeGraph2 habit={this.props.habit} data={this.props.data} />
              <MainGraph />
            </div>
          :
            <div>No habit selected</div>
        }
      </div>
    );
  }
}

export default HabitDetail;