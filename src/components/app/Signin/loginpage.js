import React from "react";
import crime1 from "../images/crime1.jpg";
import Sign from "./sign";
import {withRouter} from 'react-router-dom';


import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';

const logincss={
Align:'center',
marginTop:'250px'
    
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

class Loginpage extends React.Component {
  render() {
    return (
      <div style={logincss} >
      <center>
      <Form className="form">
          <fieldset>
        <legend><h2>LOGIN</h2></legend>
       
        <div style={imgcontainer}>
             <img src={crime1} alt="Avatar" style={avatar}></img>
               </div>
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
          <a href="/Sign">Not a registered user Sign in</a>
          <br />
          <Button>Login</Button>
          </fieldset>
        </Form>
        </center>
      </div>
    );
  }
}

export default Loginpage;