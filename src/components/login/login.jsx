'use strict';
import React from 'react';
import {render} from 'react-dom';
import { browserHistory } from 'react-router';
import { fakeAddUser } from '../../actions/actions';
import store from '../../store/createStore';


class Login extends React.Component {
  constructor(props) {
    super(props);
    this.loginUser = this.loginUser.bind(this);
    store.subscribe(() => {
      console.log('the store is', store.getState());
    });
  }


  loginUser(e) {
    e.preventDefault();
    console.log('logging in user',this.refs.userName.value);
    store.dispatch(fakeAddUser(this.refs.userName.value));
    this.context.router.push('home');
  }


  render() {
    return (
      <form onSubmit={this.loginUser}>
        <input type='text' ref='userName' name='name' placeholder='name' />
        <button type='submit'>Login</button>
      </form>
    );
  }
}

Login.contextTypes = {
  router: React.PropTypes.object.isRequired
};


export default Login;