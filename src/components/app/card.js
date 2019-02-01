import React from "react";
import crime1 from "./images/crime1.jpg";

const divStyle = {
    width:'200px',
    border:'1px solid #D3D3D3',
    margin:'15px'
  };

  const imgStyle = {
    width:'100px',
    height:'100px'
  };


class Card extends React.Component{
    render(){
        return(
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
            
        );
    }

}

export default Card;