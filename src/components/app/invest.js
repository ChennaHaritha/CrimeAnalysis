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
import Header from './header';


const heading={
  textAlign:'center',
  backgroundColor:'gray',
}



const centered={
    position: 'absolute',
    top: '50%',
    left: '50%',
    fontSize: '45px',
    transform: 'translate(-50%, -50%)',
    color:'Red'
  }
  
  const image={
    width:'100%',
    height:'400px',
    borderRadius:'10%',
    borderStyle: 'solid' 
  }

  

  
  const buttonposition={
    position: 'absolute',
    bottom: '10%', 
    width:'35%',
    height:'20%',
    left:'20%', 
    fontSize:'150%'
  }
 
  
  

class Invest extends React.Component {

  nextPath=(path) =>{
    this.props.history.push(path);
}
   
  render() {
      return (
          <div>
            <div >
              <Header></Header>
              <h1 style={heading}>CRIME DETAILS</h1>
              <br/>
              
         
                 <br/>
                <br/>
                
            </div>
            <div className="container">
            <div className="row">
            
             <div className="col-md-4" >
             <img src={robbery4} alt="Snow" style={image} ></img>
             <div style={centered} ></div>
             <Button className=" float-right" onClick={()=> this.nextPath('maincomponent')}style={buttonposition}> Analyse</Button>
             
              
             </div>

             <div className="col-md-4">
             <img src={missing} alt="Snow" style={image} ></img>
             <div style={centered}></div>
             <Button className=" float-right" onClick={()=> this.nextPath('maincomponent')}style={buttonposition}> Analyse</Button>
             </div>

             <div className="col-md-4">
             <img src={murder} alt="Snow" style={image} ></img>
             <div style={centered}></div>
              <Button className=" float-right" onClick={()=> this.nextPath('maincomponent')}style={buttonposition}> Analyse</Button>
             </div>
            </div>

            <br></br>
            <br></br>
            <br></br>
          

            <div className="row">
             <div className="col-md-4">
             <img src={stolen} alt="Snow" style={image} ></img>
             <Button className=" float-right" onClick={()=> this.nextPath('maincomponent')}style={buttonposition}> Analyse</Button>
              <div style={centered}></div>
             </div><br/>

             <div className="col-md-4">
             <img src={rape1} alt="Snow" style={image} ></img>
             <Button className=" float-right" onClick={()=> this.nextPath('maincomponent')}style={buttonposition}> Analyse</Button>
              <div style={centered}></div>
             </div>

             <div className="col-md-4">
             <img src={cybercrime1} alt="Snow" style={image} ></img>
             <Button className=" float-right" onClick={()=> this.nextPath('maincomponent')}style={buttonposition}> Analyse</Button>
              <div style={centered}></div>
             </div>
             </div>
            </div>

            </div>
        );
    }
}

export default Invest;