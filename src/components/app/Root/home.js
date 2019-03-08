import React from "react";
import crime1 from "../images/crime1.jpg";
import bargraph from "../images/bargraph.png";
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css';
import Card from "../Allcards/card";
import {withRouter} from 'react-router-dom';
import Bargraph from '../charts'
import backStyle from "../styles/style1.css";
import { BarChart } from "react-easy-chart";
import {CardColumns} from "reactstrap";
import Cards from "../Allcards/card";

import Slider from "../Allcards/Caurosel";


const main= {
    marginTop:'40px',
    marginLeft:'10px',
    marginRight:'10px',
    minHeight:'70vh',
}
const heading={
    fontSize: '90px',
    fontStyle:'oblique',
    color:'#2E5894',
    lineHeight: '40px',
    textAlign: 'center',
    marginTop:'30px',
    textShadow: '4px 4px 7px #0794DB'
    /*paddingBottom:'50px'*/
}
const marequeStyle={
    fontSize:'20px',
    paddingBottom:'50px'
}



const rowMainStyling = {
    marginTop: '50px'
    
}

const imgStyle = {
    width:'500px',
    height:'500px'
  };
 
const divStyle = {
    width:'200px',
    border:'1px solid #D3D3D3',
    margin:'15px'
  };

  const containerStyle = {
   border: '3px solid #D3D3D3',
   'borderRadius': '10px',
   'marginTop': '15px',
    'paddingLeft': '5px',
   'paddingRight': '5px',
   'paddingBottom': '5px',
   'marginBottom': '15px',
   minHeight:'50vh',
   }

   const locbutton = {
    /*backgroundColor: '#4CAF50',*/
    backgroundColor:'hsl(0, 70%, 50%)',
    color: 'white',
    padding: '4px 10px',
    cursor: 'pointer',
    paddingRight: '20px',
    paddingLeft: '20px',
    borderRadius: '5px',
    boarder:'50px',
    marginLeft:'20px'
    
    
    
};


/*

<div >
                                <button className=" float-right" style={locbutton}>Location</button>
                                <br/>
                                <hr/>
                            </div>
                            
                            <Slider></Slider>
                           
                            
                            <div >
                            <hr/>
                                <button className=" float-right" onClick={()=> this.nextPath('viewmore')}style={locbutton}>View More ...</button>
                                <br/>
                                
                            </div>
It is at line no 106
 <div>
                              <CardColumns>
                                 <Cards/> 
                              </CardColumns>
                            </div> 

*/

class Home extends React.Component {
    nextPath=(path) =>{
        this.props.history.push(path);
    }
    render() {
        return (
            <div style={main}   >   
               <div className="row" style={rowMainStyling}>
                  <div className="col-md-12">
                        <center>
                            <p style={heading}>CRIME ANALYSIS</p>
                            
                        </center>
                        <marquee >Most commited crimes in Kukatpally<span className="badge">5</span></marquee>
                    </div>
                </div>


                <div className="row" >
                        <div className="col-md-8 " style={containerStyle}>
                        
                            
                            <Slider></Slider>
                            
                            
                            <div >
                            <hr/>
                            <button className=" float-left" style={locbutton}>Location</button>
                                <button className=" float-right" onClick={()=> this.nextPath('viewmore')}style={locbutton}>View More ...</button>
                                <br/>
                                
                            </div>
                            
                        </div>

                        <div className="col-md-4">
                           <Bargraph></Bargraph>
                        </div>
                    </div>
                    
                </div>
            

            
        );
    
    }
}

export default withRouter(Home);