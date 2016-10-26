import React, { Component } from 'react';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';
import Main from '../components/main.jsx';
import Home from '../components/home.jsx';
import Register from '../components/register.jsx';
import Login from '../components/login.jsx';
import Note from '../components/note.jsx';
import requireAuth from '../utils/auth.js';
import NoteList from '../components/notelist.jsx';
import EditNote from '../components/editnote.jsx';

const Routes = () => {
  return (
    <Router history={hashHistory}>
      <Route path="/" component={Main}>
        <IndexRoute component={Home}/>
        <Route path="register" component={Register} />
        <Route path="login" component={Login}/>
        <Route path="note" component={Note} />
        <Route path="notelist" component={NoteList} onEnter={requireAuth} />
        <Route path=":editnote" component={EditNote} onEnter={requireAuth} />
      </Route>
    </Router>

    )
}

export default Routes;
