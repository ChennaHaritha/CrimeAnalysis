import React from "react";
import crime1 from "./images/crime1.jpg";

const divStyle = {
    width:'200px',
    border:'1px solid #D3D3D3',
    margin:'15px'
  };

  const imgStyle = {
    width:'100px',
    height:'100px',
    float:'right'
  };



class BroadCard extends React.Component{
    render(){
        return(
   
            <div className="row" >
            <div className="col-md-6 " >
                        <h2>Card Image</h2>
                            <p>Image at the top </p>
                            <div className="card" >   
                                <div className="card-body">
                                <img className="card-img-top-right" src={crime1} style={imgStyle}/>
                                    <h4 className="card-title">Name</h4>
                                    <p className="card-text">{this.props.desc}</p>
                                    <a href="#" className="btn btn-primary">View</a>
                                </div>
                            </div>
               </div>
            <div className="col-md-6 " >
            <h2>Card Image</h2>
                <p>Image at the top </p>
                <div className="card" >   
                    <div className="card-body">
                    <img className="card-img-top-right" src={crime1} style={imgStyle}/>
                        <h4 className="card-title">Name</h4>
                        <p className="card-text">{this.props.desc1}</p>
                        <a href="#" className="btn btn-primary">View</a>
                    </div>
                </div>
   </div>
   </div>
            
        
        );

        }

}
export default BroadCard;