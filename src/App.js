import React, { useState } from 'react';
import './App.css';
import Person from './Person/Person';

const app = props => {

    const [ personsState, setPersonsState ] = useState({
      persons: [ 
        { name: 'Anne', age: 21},
        { name: 'Tom', age: 53},
        { name: 'Jack', age: 41}
      ]    
    });

    const [otherState, setOtherState] = useState('some other state');

    console.log(personsState, otherState);

    const switchButtonHandler = () => {
      //console.log('Was clicked');
      setPersonsState( {
        persons: [ 
          { name: 'Stef', age: 21},
          { name: 'Tom', age: 53},
          { name: 'Jack', age: 61}
        ]
      } );
    }    

    return (
      <div className="App">
        <h1>Hello World</h1>
        <p>Work in progress</p>
        <button onClick={switchButtonHandler}>Switch Name</button>
        <Person name={personsState.persons[0].name} age={personsState.persons[0].age} />
        <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies:Racing</Person>
        <Person name={personsState.persons[2].name} age={personsState.persons[2].age}/>
      </div>
    );
    //return React.createElement('div', {className: 'App'}, React.createElement('h1', null , 'Some text'));
}

export default app;