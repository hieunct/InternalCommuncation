import React from "react";
import logo from "./logo.svg";
import { Login } from "./Components/index";
import { Register } from "./Components/index";
import { Form } from "./Components/index";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true,
    };
  }

  render() {
    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/signup">
              <Register />
            </Route>
            <Route path="/form">
              <Form />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
