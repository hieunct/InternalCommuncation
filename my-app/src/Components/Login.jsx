import React, {Component} from 'react';
import {AuthService} from '../service/AuthService'

export class Login extends Component{
    constructor(props){
        super(props);
        this.login = this.login.bind(this);
        this.state = {
          username:'',
          password:'',
          hasLoginFailed: false,
          showSuccessMessage: false
        }
    }
    
    handleChange = (event) => {
      this.setState(
        {
          [event.target.name] : event.target.value
        },
      )
    }

    login() {
      if(this.state.username && this.state.password){
        var user = {
          username: this.state.username,
          password: this.state.password
        }
        var hieu;
        AuthService('signin',user).then((result) => {
          hieu = result;
          console.log(result);
          return hieu;
        })
        .then(res => {
          if(res !== "Wrong Username or Password"){
            window.location.href = "http://localhost:8080/hieu/all"

            console.log(res)
          }
        })
        
      }
     }

    render() {
        return <div className="base-container">
          {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
          {this.state.showSuccessMessage && <div>Login Sucessful</div>}
          <div className="header"> Login</div>
          <div> <img className="image" src="../../public/rose.png" alt=''/> </div>
          <div className="content">
            <div className="form">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="text" name="password" value={this.state.password} onChange={this.handleChange}/>
              </div>
            </div>
          </div>
          <div className="footer">
             <button type="button" className="btn" onClick={this.login}>Login</button>
          </div> 
        </div>
        
    }
}