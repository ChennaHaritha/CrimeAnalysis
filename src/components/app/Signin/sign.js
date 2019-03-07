import React, { Component } from "react";
import crime1 from "../images/log.png";
import {Route,Router} from "react-router-dom";
import Loginpage from "./loginpage";
import stone from "../images/Stone.jpg"

import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';

const legendStyle={
  color:'maroon',
  fontSize: '30px',
  marginTop:'-10%',
  Align:'center'
}
const pageStyle={
  backgroundImage: 'url(' + stone+ ')',
}

const submitcss={
  width:'80%',
  border: 'none',
	outline: 'none',
	height: '40px',
	background: 'red',
	color: 'black',
	fontSize: '20px',
	borderRadius: '20px',
  boxShadow: '3px 3px  grey',
  marginTop:'12%'
}

const logincss={
  width: '50%',
	height: '800px',
  background: 'transparent',
	color: 'red',
	top: '30%',
  left: '40%',
  marginbottom:'3%',
	position: 'absolute',
	transform: 'translate(-50%,-50%)',
	boxSizing: 'border-box',
	padding: '70px 30px',
  boxShadow: '3px 3px  5px 5px #2c322c',
  Align:'center',
  marginTop:'200px'
  //borderRadius: '10px 10px',
}
const labelStyle={
  textAlign: 'left',
  //float:'left',
  marginLeft:'20px',
	
  fontSize: '22px',
  
}
const entireBlockStyle={
  marginTop:'20%'
}
  
   const avatar= {
      /*width: '300px',
      Height: '300px',
      borderRadius: '360px'*/
    width: '200px',
	  height: '200px',
	  borderRadius: '50%',
	  position: 'absolute',
	  top: '-120px',
    left: 'calc(45% - 45px)',
    marginbottom:'50px'
   
    }
  const inputstyle={
    
    width:'80%',
    borderBottom: '2px solid cream',
    borderTop:'0px',
    borderLeft:'0px',
    borderRight:'0px',
	  background: 'transparent',
	  height: '40px',
	  color: 'black',
    fontSize: '20px',
    Align:'center'
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
      email: this.state.email,
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
      <div style={pageStyle} >
      
      <Form className="form" onSubmit={this.handleSubmit } >
      <div style={logincss}>
          <div style={entireBlockStyle}>
        <center><legend><h2 style={legendStyle}>SIGN IN</h2></legend></center>
       <br></br>
        <div >
             <img src={crime1} alt="Avatar" style={avatar}></img>
               </div>
               <Col>
            <FormGroup>
              <Label style={labelStyle}>Enter Name</Label>
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
              <Label style={labelStyle}>Enter Email</Label>
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
              <Label style={labelStyle} for="examplePassword">Enter Password</Label>
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
          <center><Button onClick = {this.handleSubmit} type="submit" style={submitcss}>Submit</Button></center>
          </div>
          </div>
        </Form>
       
      </div>
    );
  }
}

export default Sign;