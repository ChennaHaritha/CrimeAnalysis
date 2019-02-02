import React from "react";
import Header from "./header";
import Home from "./home";
import backStyle from "./styles/style1.css"
import Footer from "./footer"

const foot={
 marginBottom:'30px'
}

class Root extends React.Component{
    render(){
        return(
            <div className={backStyle.bodyStyle}>
                <div>
                <Header/>
                </div>
                <div className="row">
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
