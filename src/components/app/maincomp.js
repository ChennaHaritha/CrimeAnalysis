import React from "react";
import crime1 from "./images/crime1.jpg";
import {Link} from "react-router-dom";
import Home from "./home";
import gradient from "./images/gradient.jpg";
import fingerprint3 from "./images/fingerprint3.jpg"

const header={
  textAlign:'center',
  marginTop:'50px',
  marginLeft:'40%',
  fontSize:'100px',
  
}
const button={
  marginLeft:'90%',
 fontSize:'30px'
}
const list={
  fontSize:'50px',
  marginLeft:'300px',
  marginTop:'150px'
}

const back={
  width:'157%',
  position: 'relative',
  cursor:'pointer',
  //backgroundImage: 'url(' + fingerprint3 + ')',
  //backgroundImage: 'Linear-gradient( rgba(255,0,0,0), rgba(255,0,0,1))',
   overflow:'hidden',
   backgroundSize: 'cover',
   height:'500%'
  }



class Maincomp extends React.Component {
    render() {
      return (
        <div style={back} >
          <div className="row">
            <h1 style={header}> ROBBERY</h1>
            <button style={button}>Map view</button>
          </div>
          <div className="row" style={list}>
           <ul>
            <li><Link to={"/home"}>Kukatpally</Link></li>
            <li><Link to={"/home"}>Bachupally</Link></li>
            <li><Link to={"/home"}>Dilshuknagar</Link></li>
            <li><Link to={"/home"}>Patancheru</Link></li>
            <li><Link to={"/home"}>Shaikpet</Link></li>
            <li><Link to={"/home"}>Gachibowli</Link></li>
            <li><Link to={"/home"}>Lb Nagar</Link></li>
           </ul>
          
          </div>
        </div>

        );
  }
}

export default Maincomp;