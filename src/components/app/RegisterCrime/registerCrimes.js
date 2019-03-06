import React from "react";
import crime1 from "../images/crime1.jpg";
import stone from "../images/Stone.jpg"

import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import Header from "../Root/header";



/*let grad1={
  height: '100px',
  backgroundcolor: 'red',  
  backgroundimage: linear-gradient( red, yellow)  
  backgroundImage: 'linear-gradient(to right, red , yellow)'
} */
const logincss={
  width: '50%',
	height: '1390px',
  background: 'transparent',
	color: 'white',
	top: '75%',
  left: '40%',
  marginbottom:'3%',
	position: 'absolute',
	transform: 'translate(-50%,-50%)',
	boxSizing: 'border-box',
	padding: '70px 30px',
  boxShadow: '3px 3px  5px 5px #2c322c',
 
  //borderRadius: '10px 10px',

}
const pageStyle={
  backgroundImage: 'url(' + stone+ ')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
  
  
}

const legendStyle={
  color:'red',
  fontSize: '30px',

}

const submitcss={
  width:'90%',
  border: 'none',
	outline: 'none',
	height: '40px',
	background: 'red',
	color: 'white',
	fontSize: '18px',
	borderRadius: '20px',
    boxShadow: '3px 3px  grey',
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
    width:'90%',
    //Border: 'none',
    borderBottom: '2px solid cream',
    borderTop:'0px',
    borderLeft:'0px',
    borderRight:'0px',
	  background: 'transparent',
	  //outline: 'none',
	  height: '40px',
	  color: 'white',
	  fontSize: '20px',
    //borderRadius: '5px 5px',
    //boxShadow: '3px 3px lightgrey' ,
}

const labelStyle={
  textAlign: 'left',
  //float:'left',
  marginLeft:'20px',
	
  fontSize: '22px',
  color:'white'
  
}
var body;

class RegisterCrimes extends React.Component {

  constructor(props) {
    super(props);
    this.handleCrimetypeChange = this.handleCrimetypeChange.bind(this);
    this.handleYearChange = this.handleYearChange.bind(this);
    this.handleGenderChange = this.handleGenderChange.bind(this);
    this.handleAgeChange = this.handleAgeChange.bind(this);
    this.handleCityChange = this.handleCityChange.bind(this);
    this.handlePeopleChange = this.handlePeopleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSuspectChange = this.handleSuspectChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
   

    //
  
    this.state = {

      crimetype:"",
	    gender:"",
	    age:"",
	    city:"",
	    people:"",
	    description:"",
	    suspect:""
    
    };

  }
  validateForm() {
    return this.state.username.length > 0 && this.state.password.length > 5 && this.state.password == this.state.confirmPassword;
  }

  handleCrimetypeChange = event => {
    
    this.setState({
      crimetype: event.target.value
    
    });
    
  }

  handleYearChange = event => {
    this.setState({
      year: event.target.value
    });
  }

  handleGenderChange = event => {
    this.setState({
      gender: event.target.value
    });
  }

  handleAgeChange = event => {
    this.setState({
      age: event.target.value
    });
  }

  handleCityChange = event => {
    this.setState({
      city: event.target.value
    });
  }

  handlePeopleChange = event => {
    this.setState({
      people: event.target.value
    });
  }

  handleDescriptionChange = event => {
    this.setState({
      description: event.target.value
    });
  }

  handleSuspectChange = event => {
    this.setState({
      suspect: event.target.value
    });
  }



  handleSubmit(event) {
    
    event.preventDefault();
    body = {

      crimetype: this.state.crimetype,
	    gender: this.state.gender,
	    age: this.state.age,
	    city: this.state.city,
	    people: this.state.people,
	    description: this.state.description,
	    suspect: this.state.suspect
    
    }
    console.log(body);
    if(this.state.crimetype==""){
      alert('Please enter the type of crime')

    }
    else if(this.state.year==""){
      alert('Please enter the year of commiting the crime')
    }
    else if(this.state.city==""){
      alert('Please enter the city of commiting crime')
    }
    else if(this.state.description==""){
      alert('Please enter the description of crime commited')
    }
    else{
    

  const url = "http://localhost:9000/registerCrime";
    let headers = new Headers();
 
    headers.append('Content-Type','application/json');
    headers.append('Accept','application/json');
 
    headers.append('Access-Control-Allow-origin',url);
    headers.append('Access-Control-Allow-Credentials','true');
 
    headers.append('POST','GET');
 
    fetch(url, {
       headers:headers,
       method: 'POST',
       body: JSON.stringify(body)
    })
    .then(response => response.json())
    .then(contents => {console.log(contents);
                      
 })
 .catch(()=> console.log("can't access" + url + "response. "))


 alert('Details are submitted successful');
 
  }
}




  render() {
    return (
      <div style={pageStyle} >
        <div > 
        <Header></Header>
       
        <div>
          <Form className="form" onSubmit={this.handleSubmit }>
              <div style={logincss}>
                <center><legend><h2 style={legendStyle}>RegisterCrimes</h2></legend></center>
          
                  <div style={imgcontainer}>
                    <img src={crime1} alt="Avatar" style={avatar}/>
                  </div>
                  <Col>
                <FormGroup>
                  <Label style={labelStyle}>CrimeType</Label>
                  <Input
                    type="name"
                    name="name"
                    id="examplename"
                    placeholder="CrimeType"
                    style={inputstyle}
                    value = {this.state.crimetype} 
                                    onChange = {this.handleCrimetypeChange}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label style={labelStyle}>Year</Label>
                  <Input
                    type="name"
                    name="name"
                    id="exampleid"
                    placeholder="enter year"
                    style={inputstyle}
                    value = {this.state.year} 
                                    onChange = {this.handleYearChange}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label style={labelStyle}>Gender</Label>
                  <Input
                    type="name"
                    name="name"
                    id="exampleGender"
                    placeholder="Gender"
                    style={inputstyle}
                    value = {this.state.gender} 
                                    onChange = {this.handleGenderChange}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label style={labelStyle}>Age</Label>
                  <Input
                    type="name"
                    name="name"
                    id="exampleAge"
                    placeholder="Age"
                    style={inputstyle}
                    value = {this.state.age} 
                                    onChange = {this.handleAgeChange}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label style={labelStyle}>City</Label>
                  <Input
                    type="name"
                    name="name"
                    id="exampleCity"
                    placeholder="City"
                    style={inputstyle}
                    value = {this.state.city} 
                                    onChange = {this.handleCityChange}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label style={labelStyle}>No.of People Affected</Label>
                  <Input
                    type="name"
                    name="name"
                    id="examplePopulation"
                    placeholder="PeopleAffected"
                    style={inputstyle}
                    value = {this.state.people} 
                                    onChange = {this.handlePeopleChange}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label style={labelStyle}>TimeOfDay</Label>
                  <Input
                    type="name"
                    name="name"
                    id="exampleDay"
                    placeholder="TimefDay"
                    style={inputstyle}
                    
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label style={labelStyle}>Lat,Lon</Label>
                  <Input
                    type="name"
                    name="name"
                    id="exampleLat"
                    placeholder="Enter Lat,Lon"
                    style={inputstyle}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label style={labelStyle}>Description</Label>
                  <Input
                    type="name"
                    name="name"
                    id="exampleDescription"
                    placeholder="Enter Description"
                    style={inputstyle}
                    value = {this.state.description} 
                                    onChange = {this.handleDescriptionChange}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label style={labelStyle}>Suspects</Label>
                  <Input
                    type="name"
                    name="name"
                    id="exampleSuspects"
                    placeholder="Suspects"
                    style={inputstyle}
                    value = {this.state.suspect} 
                                    onChange = {this.handleSuspectChange}
                  />
                </FormGroup>
              </Col>
              
              <br />
              <Button onClick = {this.handleSubmit} type="submit" style={submitcss}>Submit</Button>
              </div>
            </Form>
          </div>
        </div>
        </div>
    );
  }
}

export default RegisterCrimes;