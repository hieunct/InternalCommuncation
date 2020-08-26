import React from "react";
import logo from "./logo.svg";
import { Login } from "./Components/index";
import { Register } from "./Components/index";
import { Form } from "./Components/index";
import {UserHome} from "./Components/index"
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogginActive: true,
    };
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Switch>
            <Route path="/user/:id" exact component={UserHome} />
            <Route path="/form" component={Form}/>
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Register}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
