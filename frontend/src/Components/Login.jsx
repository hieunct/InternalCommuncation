import React, { Component } from "react";
import { AuthService } from "../service/AuthService";
import { Link, Redirect } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
export class Login extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.state = {
      username: "",
      password: "",
      hasLoginFailed: false,
      showSuccessMessage: false,
      redirect: ""
    };
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  login() {
    if (this.state.username && this.state.password) {
      var user = {
        username: this.state.username,
        password: this.state.password,
      };
      var hieu;
      AuthService("signin", user)
        .then((result) => {
          hieu = result;
          console.log(result);
          return hieu;
        })
        .then((res) => {
          if (res !== "Wrong Username or Password") {
            //window.location.href = "http://localhost:8080/hieu/all";
            this.setState({ showSuccessMessage: true });
            this.setState({ hasLoginFailed: false });
            this.setState({redirect: "UserHome"})
            console.log(res);
          } else {
            this.setState({ hasLoginFailed: true });
            this.setState({ showSuccessMessage: false });
          }
        });
    }
  }

  render() {
    if(this.state.redirect !== ""){
      return <Redirect to={this.state.redirect} />;
    }
    return (
      <Container>
        <Row>
          <Col>
            <div>
              <div className="container-fluid">
                {this.state.hasLoginFailed && (
                  <div className="alert alert-warning">Invalid Credentials</div>
                )}
                {this.state.showSuccessMessage && <div>Login Sucessful</div>}
                <div className="header"> Login</div>
                <div className="content">
                  <div className="form">
                    <div className="form-group">
                      <label htmlFor="username">Username</label>
                      <input
                        type="text"
                        name="username"
                        value={this.state.username}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        name="password"
                        value={this.state.password}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <div className="custom-control custom-checkbox">
                        <input
                          type="checkbox"
                          className="custom-control-input"
                          id="customCheck1"
                        />
                        <label
                          className="custom-control-label"
                          htmlFor="customCheck1"
                        >
                          Remember me
                        </label>
                      </div>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block" onClick={this.login}>
                      Submit
                    </button>
                    <p className="forgot-password text-right">
                      Forgot <a href="#">password?</a>
                    </p>
                    <p className="no-account text-right">
                      Not a user yet? <Link to="/signup">Register</Link>
                    </p>
                  </div>
                </div>

                {/* <div className="footer">
                  <button type="button" className="btn" >
                    Login
                  </button>
                </div> */}
              </div>
            </div>
          </Col>
          <Col>
                <img src={require('./rose.png')} alt='Rose'/>
          </Col>
        </Row>
      </Container>
    );
  }
}
