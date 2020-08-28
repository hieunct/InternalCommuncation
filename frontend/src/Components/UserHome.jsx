import React, { Component } from "react";
import { AuthService } from "../service/AuthService";
import { Link, Redirect } from "react-router-dom";
import { Box, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export class UserHome extends Component {
  constructor(props) {
    super(props);
    console.log(props);
    this.userinfo = this.userinfo.bind(this);
    this.state = {
      name: "",
      email: "",
      age: "",
      location: "",
      birthday: "",
    };
    this.style = makeStyles((theme) => ({
      image: {
        width: 10,
        height: 10,
      },
      img: {
        margin: "auto",
        maxWidth: "50%",
        maxHeight: "50%",
      },
    }));
  }

  userinfo () {
    AuthService(`/user/${this.props.match.params.id}`, "")
      .then((result) => {
        console.log(result);
        return result;
      })
      .then((res) => {
        if (res !== "Wrong Username or Password") {
          //window.location.href = "http://localhost:8080/hieu/all";
          var info = (JSON.parse(res))
          //this.setState({name: info.})
          this.setState({name: info.username})
          this.setState({age: info.password})
        }
      });
  };

  render() {
      console.log(this.userinfo())
    return (
      <React.Fragment>
        <Container
          fluid
          style={{ backgroundColor: "#cfe8fc" }}
          direction={{ direction: "row" }}
        >
          <Grid container direction={{ direction: "row" }}>
            <Grid item className={this.style.image} xl={4}>
              <img
                className={this.style.img}
                alt="demo"
                src={require("./rose.png")}
              />
            </Grid>
            <Grid item xs={4}>
              <h1>{this.state.name} + {this.state.age}</h1>
            </Grid>
          </Grid>
          {/* <Grid container>
            
          </Grid>
          <Grid container>
            <img className={this.style.img} alt="demo" src={require("./rose.png")} />
          </Grid> */}
        </Container>
      </React.Fragment>
    );
  }
}
