'use strict';
import React from 'react';
import {render} from 'react-dom';
import * as d3 from 'd3';
import styles from './lineGraph.css';


class LineGraph extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.renderLine();
  }

  componentDidUpdate() {
    this.renderLine();
  }

  renderLine() {
    console.log('line graph props', this.props);
    const getDate = date => new Date(date);
    const line = d3.line()
      .x(d => this.props.xScale(getDate(d.date)))
      .y(d => this.props.yScale(d.value))
      .curve(d3.curveMonotoneX);
    d3.select(this.refs.path).datum(this.props.data).attr('d', line);
  }

  render() {
    return (
      <path className={styles.lineGraph} ref='path'></path>
    );
  }
}

export default LineGraph;