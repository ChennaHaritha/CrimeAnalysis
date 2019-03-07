/*import React from "react";
import crime1 from "../images/crime1.jpg";

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
*/

import React from "react";
import crime1 from "../images/crime1.jpg";
import {  CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
    import {withRouter} from 'react-router-dom';


    const divStyle = {
       width:'300px',
        border:'1px solid #D3D3D3',
        margin:'15px'
      };
    
      const imgStyle = {
        width:'100px',
        height:'100px',
        float:'right'
      };

  let d;

class BroadCard extends React.Component{
   
    constructor(props){
        super(props);
        this.onButtonChange =this.onButtonChange.bind(this)
        this.state = {
          data : []
        }
      }
      onButtonChange() {
        let path=`Allnews`;
        this.props.history.push(path);
      }

      componentDidMount() {
        //const url = "http://10.10.200.12:9000/foods"; 
        const url = "http://localhost:9000/viewmorebutton"; 
        let headers = new Headers();

        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');

        headers.append('Access-Control-Allow-Origin', url);
        headers.append('Access-Control-Allow-Credentials', 'true');

        headers.append('GET', 'POST');

        fetch(url, {
            headers: headers,
            method: 'GET'
        })
        .then(response => response.json())
        .then(contents => {console.log("in fetch: "+ contents);
                            this.setState ({
                            data : contents})
            })
        .catch(() => console.log("Can’t access " + url + " response. "))
      }

    render(){
        return(
            <div className="row" >   
            <div className="col-md-6 " >{this.state.data.map((Card,index) =>{
                        return(
                          <div key={index}>
                          
                          
                            <div className="card" style={divStyle} >
                                <h2>{Card.crimetype}</h2>
                                <img className="card-img-top" src={crime1} style={imgStyle}/>
                                <div className="card-body">
                                    <h6 className="card-title">{Card.city}</h6>
                                    <p className="card-text">{Card.description}</p>
                                   
                                </div>
                                <Button onClick={this.onButtonChange}>View more</Button> 
                            </div>
                          </div>
                          
                        )           
            })}
            </div>
            </div>
             
        );
    }

}

export default BroadCard;