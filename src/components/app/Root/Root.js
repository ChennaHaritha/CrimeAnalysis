import React from "react";
import Header from "./header";
import Home from "./home";
import backStyle from "../styles/style1.css"
import Footer from "./footer";
import Fingerprint from "../images/fingerprint1.jpg"
import styled ,{keyframes} from 'styled-components'


const foot={
 position:'absolute',
 right:'0',
 bottom:'0',
 left:'0',
 marginBottom:'30px',
 textAlign:'center',
}
const rootstyle={
    /*backgroundImage: 'url(' + Fingerprint + ')',
    backgroundRepeat: 'no-repeat',
    backgroundSize: '100% 100%',
    /*
    -webkit-animation: 'mymove 5s infinite', 
    -webkit-animation-delay: '2s', 
    animation: 'mymove 5s infinite',
    animationDelay: '2s'
     */
   /* animationName: '${coolBoxKeyframes}',
   
  animationIterationCount: '1',
  animationDirection: 'normal',
  animationFillMode: 'forwards',
  animationPlayState: 'running',
  */
  minHeight:'100vh',
  
 transition: 'opacity 60s ease-in-out', 
}
const coolBoxKeyframes = keyframes`
  0% {
    top: '0px',
    
  100% {
    bottom: '200px'
    
  }
  ` 
 
  

class Root extends React.Component{
    render(){
        return(
            <div  style={rootstyle}>
                <div>
                <Header/>
                </div>
                <div className="row" >
                    <div className="col-md-12">
                        <Home></Home>
                       
                    </div>
                </div>
                <div className="row" style={foot}>
                    <div className="col-md-12">
                        <Footer></Footer>
                       
                    </div>
                </div>
            </div>
        )
    }
}

export default Root;
