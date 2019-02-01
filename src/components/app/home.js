import React from "react";
import crime1 from "./images/crime1.jpg";
import bargraph from "./images/bargraph.png";
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css';
import Card from "./card";

const main= {
    margin:'30px'
}
const heading={
    fontSize: '100px',
    fontStyle:'oblique',
    color:'#8B0000',
    lineHeight: '40px',
    textAlign: 'center',
    marginLeft:'300px',
    marginTop:'30px',
    paddingBottom:'50px'
}
const marequeStyle={
    fontSize:'20px',
    paddingBottom:'50px'
}



const rowMainStyling = {
    marginTop: '10px'

}

const imgStyle = {
    width:'100px',
    height:'100px'
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
   'paddingLeft': '15px',
   'paddingTop': '5px',
   'paddingBottom': '5px',
   'marginBottom': '15px'
   }

   const locbutton = {
    float:'right',
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '4px 10px',
    cursor: 'pointer',
    paddingRight: '20px',
    paddingLeft: '20px',
    borderRadius: '5px',
    boarder:'50px',
    
    
    
};


class Home extends React.Component {
    render() {
        return (
            <div style={main}>     
               <div className="row" style={rowMainStyling}>
                        <center>
                            <p style={heading}>CRIME ANALYSIS</p>
                            
                        </center>
                        <marquee >Most commited crimes in Kukatpally<span className="badge">5</span></marquee>
                </div>


                <div className="row" >
                        <div className="col-md-8 " style={containerStyle}>
                            <div >
                                <button className=" float-right" style={locbutton}>Location</button>
                                <br/>
                                <hr/>
                            </div>
                            <div className="row">
                                <Card 
                                    head="Heading"
                                    desc="This is from home page"></Card>
                                <Card 
                                    head="Heading"
                                    desc="This is from home page"></Card>
                                <Card 
                                    head="Heading"
                                    desc="This is from home page"></Card>   
                            </div>
                            <div >
                            <hr/>
                                <button className=" float-right" style={locbutton}>View More ...</button>
                                <br/>
                                
                            </div>
                        </div>

                        <div className="col-md-4">
                            <img className="card" src={bargraph} style={imgStyle}/>
                        </div>
                    </div>
                </div>
            

            
        );
    
    }
}

export default Home;