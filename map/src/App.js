import React, { Component } from 'react';
import SignUp from './Auth/SignUp'
import LogIn from './Auth/LogIn'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
     <SignUp/>
     <LogIn/>
      </div>
    );
  }
}

export default App;
