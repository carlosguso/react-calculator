import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Display from "./components/display/display";
import Panel from "./components/panel/panel";

import getCalc from "./functions";

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      first: null,
      second: null,
      operation: null,
      rad: false,
      nd: false
    };
  }

  buttonPressed = (name) => {
    //this.setState(this.state, getCalc(name));
    console.log(name);
  };
  
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <Display value={this.state.second || this.state.first || "0"} rad={this.state.rad}/>
        <Panel rad={this.state.rad} clickHandler={this.buttonPressed} nd={this.state.nd}/>
      </div>
    );
  }
}

export default App;
