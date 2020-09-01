import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [
        {
          id: 'm1',
          name: 'Frankenstein'
        },
        {
          id: 'm2',
          name: 'Dracula'
        },
        {
          id: 'm3',
          name: 'Chupacabra'
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        {
          this.state.monsters.map(monster => (
            <h1 key={monster.id} > {monster.name} </h1>
          ) )
        }
      </div>
    );
  }
}

export default App;
