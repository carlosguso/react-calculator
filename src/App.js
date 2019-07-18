import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Display from "./components/display/display";

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      first: null,
      second: null,
      operation: null
    };
  }

  buttonPressed = (name) => {
    this.setState();
  };
  
  render() {
    return (
      <div className="App">
        <Display value={(this.state.first || this.state.second || "0")}/>
      </div>
    );
  }
}

export default App;
