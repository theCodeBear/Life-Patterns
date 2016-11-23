'use strict';
import React from 'react';
import {render} from 'react-dom';
import store from '../../store/createStore';
import styles from './accountDropdown.css';


class AccountDropdown extends React.Component {
  render() {
    return (
      <div className={styles.dropdown}>{store.getState().user.name}</div>
    );
  }
}

export default AccountDropdown;