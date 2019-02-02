import React from "react";
import crime1 from "./images/crime1.jpg";

import {
  Container, Col, Form,
  FormGroup, Label, Input,
  Button,
} from 'reactstrap';
import Header from "./header";

const logincss={
Align:'center',
marginTop:'30px'

    
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

class RegisterCrimes extends React.Component {
  render() {
    return (
      <div style={logincss} >
        <Header></Header>
        <center>
          <Form className="form">
              <fieldset>
                <legend><h2>RegisterCrimes</h2></legend>
          
                  <div style={imgcontainer}>
                    <img src={crime1} alt="Avatar" style={avatar}/>
                  </div>
                  <Col>
                <FormGroup>
                  <Label>CrimeType</Label>
                  <Input
                    type="name"
                    name="name"
                    id="examplename"
                    placeholder="CrimeType"
                    style={inputstyle}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label>Year</Label>
                  <Input
                    type="name"
                    name="name"
                    id="exampleid"
                    placeholder="enter year"
                    style={inputstyle}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label>Gender</Label>
                  <Input
                    type="name"
                    name="name"
                    id="exampleGender"
                    placeholder="Gender"
                    style={inputstyle}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label>Age</Label>
                  <Input
                    type="name"
                    name="name"
                    id="exampleAge"
                    placeholder="Age"
                    style={inputstyle}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label>City</Label>
                  <Input
                    type="name"
                    name="name"
                    id="exampleCity"
                    placeholder="City"
                    style={inputstyle}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label>No.of People Affected</Label>
                  <Input
                    type="name"
                    name="name"
                    id="examplePopulation"
                    placeholder="PeopleAffected"
                    style={inputstyle}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label>TimeOfDay</Label>
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
                  <Label>Lat,Lon</Label>
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
                  <Label>Description</Label>
                  <Input
                    type="name"
                    name="name"
                    id="exampleDescription"
                    placeholder="Enter Description"
                    style={inputstyle}
                  />
                </FormGroup>
              </Col>
              <Col>
                <FormGroup>
                  <Label>Suspects</Label>
                  <Input
                    type="name"
                    name="name"
                    id="exampleSuspects"
                    placeholder="Suspects"
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

export default RegisterCrimes;