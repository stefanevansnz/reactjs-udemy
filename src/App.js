import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [ 
      { name: 'Anne', age: 21},
      { name: 'Tom', age: 53},
      { name: 'Jack', age: 41}
    ],
    otherState: 'other value2'
  }

  switchButtonHandler = (newName) => {
    //console.log('Was clicked');
    this.setState( {
      persons: [ 
        { name: newName, age: 21},
        { name: 'Tom', age: 53},
        { name: 'Jack', age: 61}
      ]
    } );
  }

  render() {
    return (
      <div className="App">
        <h1>Hello World</h1>
        <p>Work in progress</p>
        <button onClick={() => this.switchButtonHandler('Stef name !!!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchButtonHandler.bind(this, 'Stef name!')}>My Hobbies:Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null , 'Some text'));
  }
}

export default App;
