import React from "react";
import crime1 from "./images/crime1.jpg";
import bargraph from "./images/bargraph.png";
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css';

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
   'border-radius': '10px',
   'margin-top': '15px',
   'padding-left': '15px',
   'margin-bottom': '15px'
   }

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
                         <div className="row">
                         <div className="col-md-4 " >
                    
                           <h2>Card Image</h2>
                            <p>Image at the top </p>
                            <div className="card" style={divStyle}>
                                <img className="card-img-top" src={crime1} style={imgStyle}/>
                                <div className="card-body">
                                    <h4 className="card-title">John Doe</h4>
                                    <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                                    <a href="#" className="btn btn-primary">See Profile</a>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-4 " >
                                <h2>Card Image</h2>
                                <p>Image at the top (card-img-top):</p>
                                <div className="card" style={divStyle}>
                                    <img className="card-img-top" src={crime1} style={imgStyle}/>
                                    <div className="card-body">
                                        <h4 className="card-title">John Doe</h4>
                                        <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                                        <a href="#" className="btn btn-primary">See Profile</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 " >
                                <h2>Card Image</h2>
                                <p>Image at the top (card-img-top):</p>
                                <div className="card" style={divStyle}>
                                    <img className="card-img-top" src={crime1} style={imgStyle}/>
                                    <div className="card-body">
                                        <h4 className="card-title">John Doe</h4>
                                        <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                                        <a href="#" className="btn btn-primary">See Profile</a>
                                    </div>
                                </div>
                            </div>
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