import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Main from '../components/main.jsx';
import Home from '../components/home.jsx';
import Register from '../components/register.jsx';


const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home}/>
        <Route path="register" component={Register} />
      </Route>
    </Router>

    )
}

export default Routes;
