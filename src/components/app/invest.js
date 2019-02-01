import React from 'react';
import robbery4 from "./images/robbery4.jpg";
import crime1 from "./images/crime1.jpg";
import missing from "./images/missing.jpeg";
import murder from "./images/murder.jpeg";
import stolen from "./images/stolen.jpeg";
import rape1 from "./images/rape1.jpg";
import cybercrime1 from "./images/cybercrime1.jpg";
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button, Row, Col, Container } from 'reactstrap';

const centered={
    position: 'absolute',
    top: '50%',
    left: '50%',
    fontSize: '40px',
    transform: 'translate(-50%, -50%)',
    color:'Red'
  }
  const image={
    width:'68%',
    height:'110%',
    borderRadius:'360px',
    
    paddingRight:'15px',
    borderStyle: 'solid',
   
    
    
  }
  const heading={
      textAlign:'center',
      backgroundColor:'gray',

  }
  const image1={
   
    width:'70%',
    height:'140%',
    borderRadius:'360px',
    borderStyle: 'solid',
    minHeight: '1px'
    
  }
  const pad={
    paddingTop: '15rem',
    paddingBottom: '1rem',
  }
  const buttonposition={
    position: 'absolute',
    fontSize: '25px',
    bottom: '0.1%',
    right:'50%',
    width:'200px',
    left:'120px',
    
  }
  const centered1={
    position: 'absolute',
    top: '70%',
    left: '50%',
    fontSize: '45px', 
    transform: 'translate(-50%, -50%)',
    color:'Red' 
  }

class Invest extends React.Component {
    render() {
        return (
            <div>
            
            <div>
         <h1 style={heading}>CRIME DETAILS</h1>
         
         <br/>
     </div>
<br/>
     
     
<br/>
            <div className="row">
             <div className="col-md-4" >
             <img src={robbery4} alt="Snow" style={image} ></img>
             <Button  style={buttonposition}>Analyse</Button>
              <div style={centered} ></div>
              
             </div><br/>

             <div className="col-md-4">
             <img src={missing} alt="Snow" style={image} ></img>
             <Button  style={buttonposition}>Analyse</Button>
              <div style={centered}></div>
             </div>

             <div className="col-md-4">
             <img src={murder} alt="Snow" style={image} ></img>
             <Button  style={buttonposition}>Analyse</Button>
              <div style={centered}></div>
             </div>
            </div>

            <div className="row">
             <div className="col-md-4" style={pad}>
             <img src={stolen} alt="Snow" style={image1} ></img>
             <Button  style={buttonposition}>Analyse</Button>
              <div style={centered1}></div>
             </div><br/>

             <div className="col-md-4" style={pad}>
             <img src={rape1} alt="Snow" style={image1} ></img>
             <Button  style={buttonposition}>Analyse</Button>
              <div style={centered1}></div>
             </div>

             <div className="col-md-4" style={pad}>
             <img src={cybercrime1} alt="Snow" style={image1} ></img>
             <Button  style={buttonposition}>Analyse</Button>
              <div style={centered1}></div>
             </div>
            </div>

            </div>
        );
    }
}

export default Invest;