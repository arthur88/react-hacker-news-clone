import React, { Component } from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from "react-router-dom";

import App from './App';
import Hello from './Hello';

import './style.css';

class App2 extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Header />
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
      </div>
    );
  }
}

render(<BrowserRouter><App /></BrowserRouter>, document.getElementById('root'));
