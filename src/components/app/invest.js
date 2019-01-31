import React from 'react';
import robbery from "./images/robbery.jpeg";
import crime1 from "./images/crime1.jpg";
import missing from "./images/missing.jpeg";
import murder from "./images/murder.jpeg";
import stolen from "./images/stolen.jpeg";
import rape from "./images/rape.jpeg";
import cybercrime from "./images/cybercrime.jpeg";
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col, Container } from 'reactstrap';

const centered={
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color:'blue'
  }
  const image={
    width:'90%',
    height:'150%',
    borderRadius:'360px',
    paddingRight:'15px',

    
  }
  const heading={
      textAlign:'center',
      backgroundColor:'gray',

  }
  const image1={
   
    width:'100%',
    height:'150%',
    borderRadius:'360px',
    
    minHeight: '1px'
    
  }
  const pad={
    paddingTop: '15rem',
    paddingBottom: '1rem',
  }
  const buttonposition={
    position: 'absolute',
    bottom: '0.1%',
    right:'50%',
    width:'120px',
    left:'180px',
    
  }
  const centered1={
    position: 'absolute',
    top: '70%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    color:'white' 
  }

class Invest extends React.Component {
    render() {
        return (
            <div>
            
     
     <div>
         <h1 style={heading}>CRIME DETAILS</h1>
         <Button style={{float:'right'}} >Register new crimes</Button>
         <br/>
     </div>
<br/>
            <div className="row">
             <div className="col-md-4" >
             <img src={robbery} alt="Snow" style={image} ></img>
             <Button  style={buttonposition}>Analayse</Button>
              <div style={centered}>Robbery</div>
              
             </div><br/>

             <div className="col-md-4">
             <img src={missing} alt="Snow" style={image} ></img>
              <div style={centered}>Robbery</div>
             </div>

             <div className="col-md-4">
             <img src={murder} alt="Snow" style={image} ></img>
              <div style={centered}>Robbery</div>
             </div>
            </div>

            <div className="row">
             <div className="col-md-4" style={pad}>
             <img src={stolen} alt="Snow" style={image1} ></img>
              <div style={centered1}>Robbery</div>
             </div><br/>

             <div className="col-md-4" style={pad}>
             <img src={rape} alt="Snow" style={image1} ></img>
              <div style={centered1}>Robbery</div>
             </div>

             <div className="col-md-4" style={pad}>
             <img src={cybercrime} alt="Snow" style={image1} ></img>
              <div style={centered1}>Robbery</div>
             </div>
            </div>

            </div>
        );
    }
}

export default Invest;