import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hello World 2</h1>
        <p>WOrkign</p>
        <Person name="Anne" age="21"/>
        <Person name="Tom" age="41">My Hobbies:Racing</Person>
        <Person name="Jack" age="11"/>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null , 'Some text'));
  }
}

export default App;
