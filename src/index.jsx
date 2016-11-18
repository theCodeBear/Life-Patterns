import React from 'react';
import { Router, Route, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history';
import { render } from 'react-dom';
import Landing from './components/landing.jsx';
import Home from './components/home.jsx';
import store from './store/createStore';

const appHistory = useRouterHistory(createHashHistory)({queryKey: false});

render (
  <Router history={appHistory}>
    <Route path='/' component={Landing} />
    <Route path='/home' component={Home} />
  </Router>,
  document.getElementById('app')
);
