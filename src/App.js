import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      title: 'Software Engineer'
    };
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Hello {this.state.title}, John!
          </p>
          <button onClick={() => this.setState({title: 'Jr. Software Engineer'})}>
            Start Up!
          </button>
          <br />
          <button onClick={() => this.setState({title: 'Sr. Software Engineer'})}>
            Level Up!
          </button>
        </header>
      </div>
    );
  }
}

export default App;
