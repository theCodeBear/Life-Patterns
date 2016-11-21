'use strict';
import React from 'react';
import {render} from 'react-dom';
import * as d3 from 'd3';
import moment from 'moment';
import store from '../../store/createStore';
import styles from './snakeGraph2.css';
import XYAxis from '../xYAxis/xYAxis.jsx';
import LineGraph from '../lineGraph/lineGraph.jsx';



const width = window.innerWidth - 220 - 50;
const height = 100;

store.subscribe(() => {
  console.log('snake 2 - store changed:', store.getState().habitData)
})

const sortPopulateAndSumNumberGraph = data => {
  console.log('RUNNING SUM FUNC ****************');
  let sortedData = data.slice().sort((a,b) => (a.date < b.date) ? -1 : 1);
  sortedData = sortedData.reduce((prev, curr) => {
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
      // console.log('store in sort', store.getState());
      // debugger;
      prevOne.value = prevOne.value + curr.value;
      return prev;
    } else return prev.concat(curr);
  },[]);
  var lastRecordedUntilNow = moment().diff(sortedData[sortedData.length-1].date, 'days');
  for (let i=1; i <= lastRecordedUntilNow; i++) {
    sortedData.push({date: moment(sortedData[sortedData.length-1].date).add(i, 'days'), value: 0});
  }
  return sortedData;
};

const xScale = () => {
  let twoMonthsAgo = moment().subtract(2, 'months');
  return d3.scaleTime()
    .range([0, width])
    .domain([twoMonthsAgo, new Date()]);
};

const yScale = (data) => {
  const getValues = d => d.map(el => el.value);
  const values = getValues(data)
  const least = d3.min(values);
  const most = d3.max(values);
  return d3.scaleLinear()
    .range([height, 0])
    .domain([ least-((most-least)/10), most+((most-least)/10) ]);
};




const SnakeGraph2 = (props) => {
  console.log('SNAKE GRAPH 2 PROPS', props);
  let data = sortPopulateAndSumNumberGraph(props.data);
  const scales = { xScale: xScale(), yScale: yScale(data) };
  return (
    <svg id='snakeGraph2' className={styles.snake2} height='125' width={width}>
      <defs id='defs'>
        <linearGradient id="RectGradient" x1="0" x2="0" y1="1" y2="0">
          <stop offset="10%" stopColor="#d6e685"></stop>
          <stop offset="33%" stopColor="#8cc665"></stop>
          <stop offset="66%" stopColor="#44a340"></stop>
          <stop offset="90%" stopColor="#1e6823"></stop>
        </linearGradient>
      </defs>
      <LineGraph data={data} {...scales} />
      <XYAxis height={height} width={width} {...scales} />
    </svg>
  );
};

export default SnakeGraph2;