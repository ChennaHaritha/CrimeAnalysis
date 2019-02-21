import React, { Component } from "react";
import crime1 from "./images/crime1.jpg";
import {Route,Router} from "react-router-dom";
import Loginpage from "./loginpage";

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

var body;

class Sign extends Component {

  constructor(props) {
    super(props);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleEmailChange = this.handleEmailChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.validateForm = this.validateForm.bind(this);

    //
    
    this.state = {
      name: "",
      email:"",
      password: "",
      //confirmPassword: ""
      
    };

  }
  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 5 && this.state.password == this.state.confirmPassword;
  }

  handleNameChange = event => {
    this.setState({
      name: event.target.value
    });
  }

  handleEmailChange = event => {
    this.setState({
      email: event.target.value
    });
  }

  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    });
  }



  handleSubmit(event) {
    event.preventDefault();
    body = {
      name: this.state.name,
      password: this.state.password,

     //confirmPassword: this.state.confirmPassword,
    }
    console.log(body);

  const url = "http://localhost:9000/register";
    let headers = new Headers();
 
    headers.append('Content-Type','application/json');
    headers.append('Accept','application/json');
 
    headers.append('Access-Control-Allow-origin',url);
    headers.append('Access-Control-Allow-Credentials','true');
 
    headers.append('GET','POST');
 
    fetch(url, {
       headers:headers,
       method: 'POST',
       body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(contents => {console.log(contents);
                      
 })
 .catch(()=> console.log("can't access" + url + "response. "))
 return (
  <Router>
 <Route  exact path='/login' component={Loginpage}/>
 </Router>
 )
  }

  render() {
    return (
      <div style={logincss} >
      <center>
      <Form className="form" onSubmit={this.handleSubmit } >
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
                value = {this.state.name} 
                                    onChange = {this.handleNameChange}
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
                value = {this.state.email} 
                                    onChange = {this.handleEmailChange}
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
                value = {this.state.password} 
                                    onChange = {this.handlePasswordChange}
              />
            </FormGroup>
          </Col>
          
          <br />
          <Button onClick = {this.handleSubmit} type="submit" >Submit</Button>
          </fieldset>
        </Form>
        </center>
      </div>
    );
  }
}

export default Sign;