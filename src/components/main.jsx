import React, { Component } from 'react';
import { Link } from 'react-router';


const propTypes = {
  children: React.PropTypes.element.isRequired,
}

class Main extends Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div>
        <div id="main-nav">
          <h1>Notes Map</h1>
            <Link className="login" to="login">Login /</Link>

            <Link className="register" to="register"> Register</Link>
        </div>
        <div id="main-content">
          {this.props.children}
        </div>
      </div>
      )
  }
}

Main.propTypes = propTypes;

export default Main;
