'use strict';
import React from 'react';
import {render} from 'react-dom';
import * as d3 from 'd3';
import styles from './axis.css';


class Axis extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.renderAxis();
  }

  componentDidUpdate() {
    this.renderAxis();
  }

  renderAxis() {
    let node = this.refs.axis;
    let axis = d3[this.props.axisType]()
      .scale(this.props.scale)
      .tickSize(this.props.tickSize)
      .ticks(this.props.ticks);
    d3.select(node).call(axis);
  }

  render() {
    return (
      <g className={styles.axis} ref='axis' transform={this.props.translate}></g>
    );
  };
}

export default Axis;