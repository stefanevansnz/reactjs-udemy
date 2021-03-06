import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [ 
      { name: 'Max', age: 28},
      { name: 'Manu', age: 29},
      { name: 'Stephanie', age: 27}
    ],
    otherState: 'other value2'
  }

  switchButtonHandler = () => {
    //console.log('Was clicked');
    this.setState( {
      persons: [ 
        { name: 'Max!!', age: 28},
        { name: 'Manu', age: 29},
        { name: 'Stephanie', age: 27}
      ]
    } );
  }

  nameChangedHandler = (event) => {
    this.setState( {
      persons: [ 
        { name: 'Max', age: 21},
        { name: event.target.value, age: 29},
        { name: 'Stephanie', age: 27}
      ]
    } );
  }

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }

    return (
      <div className="App">
        <h1>Hi, I'm a React App</h1>
        <p>Work in progress</p>
        <button 
          style={style}
          onClick={() => this.switchButtonHandler('Stef name !!!')}>Switch Name</button>
        <Person 
          name={this.state.persons[0].name} 
          age={this.state.persons[0].age} />
        <Person 
          name={this.state.persons[1].name} 
          age={this.state.persons[1].age}
          click={this.switchButtonHandler.bind(this, 'Stef name!')}
          changed={this.nameChangedHandler}>My Hobbies:Racing</Person>
        <Person 
          name={this.state.persons[2].name} 
          age={this.state.persons[2].age}/>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null , 'Some text'));
  }
}

export default App;
