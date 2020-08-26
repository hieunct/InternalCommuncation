import React, { Component } from "react";
import { AuthService } from "../service/AuthService";
import { Link, Redirect } from "react-router-dom";
import { Box, Container, Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

export class UserHome extends Component {
  constructor(props) {
    super(props);
    console.log(props)
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

  render() {
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
              <h1>{this.props.match.params.id}</h1>
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
