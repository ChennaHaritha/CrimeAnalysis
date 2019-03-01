import React from "react";
import crime1 from "../images/crime1.jpg";
import Sign from "./sign";
import {withRouter} from 'react-router-dom';
import {createBrowserHistory} from 'history';
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

const responseGoogle = (response) => {
  console.log(response);
}

var body;
let token="";

class Loginpage extends React.Component {
  constructor(props) {
    super(props);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit(event) {

    
    body = {
      name: this.state.name,
      password: this.state.password,
    }
   /* if(body.name=='null' && (!body.password)){
      alert('please enter the user name and password');
    }
    */
    if(!body.name){
       alert('please enter the user name');
    }
    else if(!body.password){
      alert('please enter the password');
    }
    else {
    console.log(body)
    console.log(body.password)
    console.log(body.name)
    
    const url = "http://localhost:9000/login?name="+body.name+"&password="+body.password;
    
    console.log(url)

    let headers = new Headers();
 
    headers.append('Content-Type','application/json');
    headers.append('Accept','application/json');
 
    headers.append('Access-Control-Allow-origin',url);
   
    headers.append('Access-Control-Allow-Credentials','true');
 
    headers.append('PUT','GET');
    this.history=createBrowserHistory();
    fetch(url, {
            headers:headers,
            method: 'PUT',
            body: JSON.stringify(body)
          })
          .then(response => response.json())
          .then(contents => {console.log(contents);
          
                localStorage.setItem("AccessToken",contents.accessToken);
                let path=`logged in`
          this.props.history.push('/');
           //console.log(contents.accessToken)                 
      })
          .catch(()=> console.log("can't access" + url + "response. "))
          
     
      }
    }
  

  validateForm() {
    return this.state.name.length > 0 && this.state.password.length > 5;
  }

  handlePasswordChange (event) {
    this.setState({
      
      password: event.target.value

    });
  }


  handleNameChange(event) {
    this.setState({ name: event.target.value})
    console.log(event.target.value)
  }

  render() {
    return (
      <div style={logincss} >
      <center>
      <Form className="form" onSubmit={this.onSubmit}>
          <fieldset>
        <legend><h2>LOGIN</h2></legend>
       
        <div style={imgcontainer}>
             <img src={crime1} alt="Avatar" style={avatar}></img>
               </div>
          <Col>
            <FormGroup onChange={this.handleNameChange}>
              <Label>Enter Username</Label>
              <Input
                type="text"
                name="name"
                id="examplename"
                placeholder="username"
                style={inputstyle}
              />
            </FormGroup>
          </Col>
          <Col>
            <FormGroup onChange={this.handlePasswordChange}>
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
          <Button onClick={this.handleSubmit}>Login</Button>
          </fieldset>
        </Form>
        </center>
      </div>
    );
  }
}

export default withRouter(Loginpage);