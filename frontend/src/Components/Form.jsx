import React, { Component } from "react";
import { AuthService } from "../service/AuthService";
import { Container, Col, Row } from "react-bootstrap";
import { Link, Redirect } from "react-router-dom";
export class Form extends Component {
  render() {
    return (
      <Container>
        <Row style={{color: "pink"}, {fontFamily: "'Fira Sans', sans-serif"}, {textAlign:"center"}}>
            <h1 style={{color: "pink", textAlign: "center"}}>Hello</h1>
        </Row>
      </Container>
    );
  }
}
