import React from "react";
import search from "../Root/header"
import { Card, CardImg, CardText, CardBody,
    CardTitle, CardSubtitle, Button } from 'reactstrap';
import {CardColumns} from "reactstrap";
import crime1 from "../images/crime1.jpg";
import LoggedHeader from "../Root/LoggedHeader";
import Header from "../Root/header"

const imgStyle = {
    width:'100px',
    height:'100px',
    float:'left'
  };

  const divStyle = {
    width:'200px',
    border:'1px solid #D3D3D3',
    margin:'15px'
  };

let name;
class SearchDetails extends React.Component {

    constructor(props){
        super(props);
        
        console.log(name)
        this.state = {
          data : [],
          name: this.props.location.state.name,
        }
      }
    
    componentDidMount() {
        console.log("hello")
        this.requestData(this.state.name);
      }

    handleSubmit = (name) => {
        this.requestData(name);
    }
    requestData(name) {

        const url = "http://localhost:9000/crimedetails?crimetype="+name;
        console.log(url) 
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

    render() {
       
        return (
            <div>
                <div>
                {
              ((localStorage.getItem("AccessToken") == null )?(<Header onSubmit={this.handleSubmit}/>):(<LoggedHeader onSubmit={this.handleSubmit} />))
            }
               
                </div>
                
            <div className="row" >  
             
            <div className="col-md-6 " >{this.state.data.map((RegisterCrime,index) =>{
                let url="http://localhost:9000/images?id="+RegisterCrime.urls[0];

                        return(
                          <div key={index}>
                          
                           <div className="card" style={divStyle} >
                                
                                <img className="card-img-top" src={url} style={imgStyle}/>
                                <div className="card-body">
                                    <h4 className="card-title">{RegisterCrime.crimetype}</h4>
                                    <h6 className="card-title">{RegisterCrime.city}</h6>
                                    <p className="card-text">{RegisterCrime.description}</p>
                                    
                                </div>
                    
                            </div>
                          </div>
                          
                        )           
            })}
            </div>
            </div>
            </div>
             
        );
            
    }
} 

export default SearchDetails;