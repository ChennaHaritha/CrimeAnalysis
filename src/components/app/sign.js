import React, { Component } from "react";
import crime1 from "./images/crime1.jpg";

import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';

const logincss={
Align:'center',
marginTop:'150px'
    
}
const imgcontainer={
    textAlign: 'center',
    margin: '24px 0 12px 0'
  }
  const avatar= {
    width: '300px',
    Height: '300px',
    borderRadius: '360px'
  }
const inputstyle={
    width:'400px'
}

class Sign extends Component {
  render() {
    return (
      <div style={logincss} >
      <center>
      <Form className="form">
          <fieldset>
        <legend><h2>SIGN IN</h2></legend>
       
        <div style={imgcontainer}>
             <img src={crime1} alt="Avatar" style={avatar}></img>
               </div>
               <Col>
            <FormGroup>
              <Label>Enter Name</Label>
              <Input
                type="name"
                name="name"
                id="examplename"
                placeholder="Enter name"
                style={inputstyle}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Enter Id</Label>
              <Input
                type="email"
                name="email"
                id="exampleid"
                placeholder="enter id"
                style={inputstyle}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label>Enter Email</Label>
              <Input
                type="email"
                name="email"
                id="exampleEmail"
                placeholder="mygmail@gmail.com"
                style={inputstyle}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Enter Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
                style={inputstyle}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup>
              <Label for="examplePassword">Enter Phonenumber</Label>
              <Input
                type="phonenumber"
                name="phonenumber"
                id="examplephonenumber"
                placeholder="Enter phonenumber"
                style={inputstyle}
              />
            </FormGroup>
          </Col>
          <br />
          <Button>Submit</Button>
          </fieldset>
        </Form>
        </center>
      </div>
    );
  }
}

export default Sign;