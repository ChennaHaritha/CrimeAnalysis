import React from "react";
import crime1 from "../images/crime1.jpg";
import login from "../images/log.png"
import Sign from "./sign";
import stone from "../images/Stone.jpg"
import {withRouter} from 'react-router-dom';
import {createBrowserHistory} from 'history';
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

let pageStyle={
  backgroundImage: 'url(' + stone+ ')',
}

const submitcss={
  width:'80%',
  border: 'none',
	outline: 'none',
	height: '40px',
	background: 'red',
	color: 'white',
	fontSize: '20px',
	borderRadius: '20px',
  boxShadow: '3px 3px  grey',
  marginTop:'20%'

}

let logincss={
  width: '50%',
	height: '800px',
  background: 'transparent',
	color: 'white',
	top: '30%',
  left: '40%',
  marginbottom:'3%',
	position: 'absolute',
	transform: 'translate(-50%,-50%)',
	boxSizing: 'border-box',
	padding: '70px 30px',
  boxShadow: '3px 3px  5px 5px #2c322c',
  Align:'center',
  marginTop:'200px',
  position:'absolute'
  //borderRadius: '10px 10px',
}
const labelStyle={
  textAlign: 'left',
  //float:'left',
  marginLeft:'20px',
	
  fontSize: '22px',
  
}
  const imgcontainer={
      textAlign: 'center',
      margin: '24px 0 12px 0'
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
  const entireBlockStyle={
    marginTop:'20%'
}

 const notregistered={
    
  padding:'100px'
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
      <div style={{...pageStyle,...logincss}}>
      
      <Form className="form" onSubmit={this.onSubmit}>
      <div >
          <div >
            <img src={login} alt="Avatar" style={avatar}/>
          </div>
          <div style={entireBlockStyle}>
          <center><legend><h2 style={legendStyle}>LOGIN</h2></legend></center>
          <br></br>
          <br></br>
          <Col>
            <FormGroup onChange={this.handleNameChange}>
              <Label style={labelStyle}>Enter Username</Label>
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
              <Label style={labelStyle} for="examplePassword">Enter Password</Label>
              <Input
                type="password"
                name="password"
                id="examplePassword"
                placeholder="********"
                style={inputstyle}
              />
            </FormGroup>
          </Col><center>
          <a href="/Sign" style={notregistered}>Not a registered user Sign in</a>
          <br />
          <Button onClick={this.handleSubmit} style={submitcss}>Login</Button>
          </center>
          </div>
          </div>
        </Form>
       
      </div>
    );
  }
}

export default withRouter(Loginpage);