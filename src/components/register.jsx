import React, { Component } from 'react';
import { withRouter } from 'react-router';
import firebase from '../../firebase.config.js';

class Register extends Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: '',
      firstname: '',
      lastname: '',
      notes: {},
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const stateObj = {};
    const stateKey = e.target.name;
    stateObj[stateKey] = e.target.value;
    this.setState(stateObj);
  }

  handleSubmit() {
    const { username, password, firstname, lastname, notes } = this.state;
    firebase.auth()
      .createUserWithEmailAndPassword(username, password)
      .catch( err => {
        console.log(err);
      })
      .then( (user) => {
        firebase.database().ref('users')
          .child(user.uid)
          .set({username: username, password: password, firstname: firstname, lastname: lastname})
      })
      .then( () => {
        this.props.router.push('/note')
      })
  }

  render() {
    return (
      <div>
        <div id="register-form">
          <div>
            <input name="firstname" onChange={this.handleChange} type="text" placeholder="first name" />
          </div>
          <div>
            <input name="lastname" onChange={this.handleChange} type="text" placeholder="last name" />
          </div>
          <div>
            <input name="username" onChange={this.handleChange} type="text" placeholder="username" />
          </div>
          <div>
            <input name="password" onChange={this.handleChange} type="password" placeholder="password" />
          </div>
          <button className="btn" onClick={this.handleSubmit}>Register</button>
        </div>
      </div>
      )
    }
}

export default withRouter(Register);


