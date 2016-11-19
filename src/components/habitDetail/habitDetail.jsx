'use strict';
import React from 'react';
import {render} from 'react-dom';
import SnakeGraph from '../snakeGraph/snakeGraph.jsx';
import MainGraph from '../mainGraph/mainGraph.jsx';

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
              <div>{this.props.habit}</div>
              <SnakeGraph />
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