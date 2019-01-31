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
<<<<<<< HEAD
      <div style={logincss} >
      <center>
      <Form className="form">
          <fieldset>
        <legend><h2>RegisterCrimes</h2></legend>
       
        <div style={imgcontainer}>
             <img src={crime1} alt="Avatar" style={avatar}></img>
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
=======
      <Form>
        <FormGroup>
          <Label for="CrimeType">CrimeType</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelect">Select</Label>
          <Input type="select" name="select" id="exampleSelect">
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleSelectMulti">Select Multiple</Label>
          <Input type="select" name="selectMulti" id="exampleSelectMulti" multiple>
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </Input>
        </FormGroup>
        <FormGroup>
          <Label for="exampleText">Text Area</Label>
          <Input type="textarea" name="text" id="exampleText" />
        </FormGroup>
        <FormGroup>
          <Label for="exampleFile">File</Label>
          <Input type="file" name="file" id="exampleFile" />
          <FormText color="muted">
            This is some placeholder block-level help text for the above input.
            It's a bit lighter and easily wraps to a new line.
          </FormText>
        </FormGroup>
        <FormGroup tag="fieldset">
          <legend>Radio Buttons</legend>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option one is this and that—be sure to include why it's great
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input type="radio" name="radio1" />{' '}
              Option two can be something else and selecting it will deselect option one
            </Label>
          </FormGroup>
          <FormGroup check disabled>
            <Label check>
              <Input type="radio" name="radio1" disabled />{' '}
              Option three is disabled
            </Label>
          </FormGroup>
        </FormGroup>
        <FormGroup check>
          <Label check>
            <Input type="checkbox" />{' '}
            Check me out
          </Label>
        </FormGroup>
        <Button>Submit</Button>
      </Form>
>>>>>>> 727c765af9d53a703af6bbd2bb73adcedee6cfc1
    );
  }
}

export default Sign;