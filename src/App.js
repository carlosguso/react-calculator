import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';

import Display from "./components/display/display";
import Panel from "./components/panel/panel";

class App extends Component{
  constructor(props) {
    super(props);
    this.state = {
      first: null,
      second: null,
      operation: null,
      rad: false
    };
  }

  buttonPressed = (name, selected = false) => {
    //this.setState();
    console.log(name);
    console.log(selected);
  };
  
  render() {
    return (
      <div className="App">
        <Display value={this.state.second || this.state.first || "0"}/>
        <Panel rad={this.state.rad} clickHandler={this.buttonPressed}/>
      </div>
    );
  }
}

export default App;
