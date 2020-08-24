
import React, {Component} from 'react';
import {AuthService} from '../service/AuthService'
import { Redirect } from "react-router-dom"
export class Register extends Component{
    constructor(props){
        super(props);
        this.register = this.register.bind(this);
        this.checkConfirm = this.checkConfirm.bind(this);
        this.checkUsername = this.checkUsername.bind(this);
        this.state = {
          username:'',
          password:'',
          confirm:'',
          hasLoginFailed: false,
          showSuccessMessage: false,
          confirmPasswordMatch: false,
          usernameUsed: false,
          redirect: null
        }
        console.log(this.state.password !== this.state.confirm)
    }


    handleChange = (event) => {
        this.setState(
          {
            [event.target.name] : event.target.value
          }
        )
      }
    
    checkUsername() {
        if(this.state.username !== ''){
            var name = {username: this.state.username}
            var res;
            AuthService("check", name).then(res => {
                if(res === 'Username already existed'){
                    this.setState({usernameUsed : true})
                }
                else{
                  this.setState({usernameUsed: false})
                }
            })
            return( this.state.usernameUsed)
        }
    }

    checkConfirm() {
        if(this.state.confirm !== ''){
            return this.state.password !== this.state.confirm
        }
    }
    
    register() {
        if(this.state.username && this.state.password){
            var user = {
                username: this.state.username,
                password: this.state.password
            }
            var hieu;
            AuthService('signup',user).then((result) => {
                return result;
            })
            .then(res => {
                if(res === "Registered successfully"){
                    this.setState({redirect: "Login"})
                }
            })
        }
    }
    render(){
        if(this.state.redirect){
          return <Redirect to={this.state.redirect} />
        }
        return <div className="base-container">
          <div className="header"> Register</div>
          <div> <img className="image" src="../../public/rose.png" alt=''/> </div>
          <div className="content">
            <div className="form">
              <div className="form-group">
                <label htmlFor="username">Username</label>
                <input type="text" name="username" value={this.state.username} onChange={this.handleChange} />
              </div>
              {(this.checkUsername()) && <div className="col-sm-3">
                     <small id="passwordHelp" className="text-danger">
                            Username already existed. 
                        </small>      
                </div>}
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
              </div>
              <div className="form-group">
                <label htmlFor="confirm">Confirm password</label>
                <input type="password" name="confirm" value={this.state.confirm} onChange={this.handleChange}/>
                {(this.checkConfirm()) && <div className="col-sm-3">
                     <small id="passwordHelp" className="text-danger">
                            Password does not match. 
                        </small>      
                </div>}
              </div>
            </div>
          </div>
          <div className="footer">
             <button type="button" className="btn" onClick={this.register}>Sign up</button>
          </div> 
        </div>
    }
}