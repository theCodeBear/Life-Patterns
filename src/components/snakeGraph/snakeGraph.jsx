'use strict';
import React from 'react';
import {render} from 'react-dom';
import * as d3 from 'd3';
import moment from 'moment';
import styles from './snakeGraph.css';
import store from '../../store/createStore';


class SnakeGraph extends React.Component {
  constructor(props) {
    super(props);
    console.log('store', store.getState());
    this.state = { data: store.getState().habitData[this.props.habit] };
  }

  componentDidMount() {
    this.createSnakeGraph();
  }

  createSnakeGraph() {
    console.log('d3', d3);
    const getDate = (date) => new Date(date);
    const getDates = data => data.map(el => el.date);
    const getValues = data => data.map(el => el.value);
    let svg = d3.select('#snakeGraph').attr('class', styles['svg-graph']);
    let path = svg.append('path')
      .attr('class', styles['line-graph']);
    let width = 500, height = 150;
    width = window.innerWidth - 220 - 50;
    console.log('width', width);
    d3.select('#snakeGraph').attr('width', width);
    let x = d3.scaleTime().range([0, width]);
    // let dates = getDates(this.state.data);
    // let earliest = d3.min(dates);
    // x.domain([new Date(earliest), new Date()]);
    let twoMonthsAgo = moment().subtract(2, 'months');
    x.domain([twoMonthsAgo, new Date()]);

    let values = getValues(this.state.data);
    let most = d3.max(values);
    let least = d3.min(values);
    console.log('most', most);

    let y = d3.scaleLinear().range([height, 0]);
    y.domain([least, most]);

    // let xAxis = d3.axisBottom()
    //   .scale(x)
      // .tickSize(10)
      // .ticks(5);
    // let yAxis = d3.axisLeft()
    //   .scale(y)
    //   .tickSize(10)
    //   .ticks(1);

    let line = d3.line()
      .x(d => x(getDate(d.date)))
      .y(d => y(d.value))
      .curve(d3.curveBasis);

    path.datum(this.state.data).attr('d', line);

    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      // .call(xAxis);
    svg.append('g')//.call(yAxis);
  }

  render() {
    console.log('snake state', this.state);
    return (
      <div>
        <svg id='snakeGraph' height='150'>
          <defs id='defs'>
            {/*<linearGradient id="MyGradient">
              <stop offset="5%" stopColor="#36F" />
              <stop offset="95%" stopColor="#FF6" />
            </linearGradient>*/}
            <linearGradient id="RectGradient" x1="0" x2="0" y1="1" y2="0">
              <stop offset="10%" stopColor="#d6e685"></stop>
              <stop offset="33%" stopColor="#8cc665"></stop>
              <stop offset="66%" stopColor="#44a340"></stop>
              <stop offset="90%" stopColor="#1e6823"></stop>
            </linearGradient>
          </defs>
        </svg>
      </div>
    );
  }
}

export default SnakeGraph;