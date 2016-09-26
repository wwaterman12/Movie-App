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
          <h1>Title Goes Here</h1>
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
