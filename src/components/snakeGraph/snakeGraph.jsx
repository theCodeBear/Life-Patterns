'use strict';
import React from 'react';
import {render} from 'react-dom';
import * as d3 from 'd3';
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
    let svg = d3.select('#snakeGraph').attr('class', styles['svg-graph']);
    let path = svg.append('path')
      .attr('class', styles['line-graph']);
    let width = 500, height = 200;
    let x = d3.scaleTime().range([0, width]);
    var dates = getDates(this.state.data);
    var earliest = d3.min(dates);
    x.domain([new Date(earliest), new Date()]);

    let y = d3.scaleLinear().range([height, 50]);
    y.domain([0, 300]);

    let xAxis = d3.axisBottom()
      .scale(x)
      .tickSize(10)
      .ticks(5);
    let yAxis = d3.axisLeft()
      .scale(y)
      .tickSize(10)
      .ticks(1);

    let line = d3.line()
      .x(d => x(getDate(d.date)))
      .y(d => y(d.value))
      .curve(d3.curveBasis);

    path.datum(this.state.data).attr('d', line);

    svg.append('g')
      .attr('transform', `translate(0,${height})`)
      .call(xAxis);
    svg.append('g').call(yAxis);

  }

  render() {
    console.log('snake state', this.state);
    return (
      <div id='snakeGraphComponent'>
        <div>Snake Graph</div>
        <svg id='snakeGraph' width='500' height='400'></svg>
      </div>
    );
  }
}

export default SnakeGraph;