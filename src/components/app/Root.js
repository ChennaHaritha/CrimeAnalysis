import React from "react";
import Header from "./header";
import Home from "./home";
import backStyle from "./styles/style1.css"

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
            </div>
        )
    }
}

export default Root;
