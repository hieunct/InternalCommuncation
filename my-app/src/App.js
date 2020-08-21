import React from 'react';
import logo from './logo.svg';
import {Login} from "./Components/index";
import {Register} from "./Components/index";
import './App.css';

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }
  render() {
    return <Register password={"hieu"} />
  }
}

export default App;
