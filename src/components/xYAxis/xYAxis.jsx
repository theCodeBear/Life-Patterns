'use strict';
import React from 'react';
import {render} from 'react-dom';
import styles from './xYAxis.css';
import Axis from '../axis/axis.jsx';


const XYAxis = (props) => {
  const xSettings = {
    scale: props.xScale,
    translate: `translate(0,${props.height})`,
    tickSize: 0,
    ticks: 2,
    axisType: 'axisBottom'
  };
  const ySettings = {
    scale: props.yScale,
    tickSize: 0,
    ticks: 2,
    axisType: 'axisLeft'
  };
  return (
    <g>
      <Axis {...xSettings} />
      <Axis {...ySettings} />
    </g>
  );
};

export default XYAxis;