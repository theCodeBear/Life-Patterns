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
    this.sortPopulateAndSumNumberGraph = this.sortPopulateAndSumNumberGraph.bind(this);
    // store.subscribe(() => {
    //   console.log('in snake graph, store changed', store.getState());
    //   this.setState({data: store.getState().habitData[this.props.habit]});
    // });
  }

  componentDidMount() {
    this.createSnakeGraph();
  }


  sortPopulateAndSumNumberGraph(data) {
    let sortedData = data.slice().sort((a,b) => (a.date < b.date) ? -1 : 1);
    return sortedData.reduce((prev, curr) => {
      if (!prev.length) return prev.concat(curr);
      let prevOne = prev[prev.length-1];
      let missingDaysCount = moment(curr.date).diff(prevOne.date, 'days') - 1;
      if (missingDaysCount > 0) {
        let diff = Array.from(Array(missingDaysCount)).map((el,i) => i+1);
        return prev.concat(diff.map(el => {
          return {
            date: moment(prevOne.date).add(el,'days').format('MM/DD/YYYY'),
            value: 0
          };
        }), curr);
      } else if (prevOne.date === curr.date) {
        prevOne.value += curr.value;
        return prev;
      } else return prev.concat(curr);
    },[]);
  }

  createSnakeGraph() {
    console.log('d3', d3);

    const getDate = date => new Date(date);
    const getValues = data => data.map(el => el.value);

    let svg = d3.select('#snakeGraph');

    let path = svg.append('path')
      .attr('class', styles['line-graph']);

    let height = 100;
    let width = window.innerWidth - 220 - 50;

    d3.select('#snakeGraph').attr('width', width);

    let x = d3.scaleTime().range([0, width]);

    let dataReady = this.sortPopulateAndSumNumberGraph(this.state.data);
    // dataReady.map(el => console.log(`date: ${el.date}, value: ${el.value}`));

    // const getDates = data => data.map(el => el.date);
    // let dates = getDates(this.state.data);
    // let earliest = d3.min(dates);
    // x.domain([new Date(earliest), new Date()]);
    let twoMonthsAgo = moment().subtract(2, 'months');
    x.domain([twoMonthsAgo, new Date()]);

    let values = getValues(dataReady);
    let most = d3.max(values);
    let least = d3.min(values);

    let y = d3.scaleLinear().range([height, 0]);
    y.domain([ least-((most-least)/10), most+((most-least)/10) ]);

    let xAxis = d3.axisBottom()
      .scale(x)
      .tickSize(0)
      .ticks(2);
    let yAxis = d3.axisLeft()
      .scale(y)
      .tickSize(0)
      .ticks(2);

    let line = d3.line()
      .x(d => x(getDate(d.date)))
      .y(d => y(d.value))
      .curve(d3.curveMonotoneX);

    path.datum(dataReady).attr('d', line);

    svg.append('g')
      .attr('class', styles.axis)
      .attr('transform', `translate(0,${height})`)
      .call(xAxis);
    svg.append('g')
      .attr('class', styles.axis)
      .call(yAxis);
  }

  render() {
    console.log('snake state', this.state);
    return (
      <div>
        <svg id='snakeGraph' className={styles['svg-graph']} height='125'>
          <defs id='defs'>
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