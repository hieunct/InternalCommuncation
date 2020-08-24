import React from 'react';
import logo from './logo.svg';
import {Login} from "./Components/index";
import {Register} from "./Components/index";
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

class App extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true
    };
  }
  

  render() {
    return (
      <Router>
      <div>
        

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/signup">
            <Register />
          </Route>
          <Route path="/">
            <Login />
          </Route>
        </Switch>
      </div>
    </Router>
    );
  }
}

export default App;
