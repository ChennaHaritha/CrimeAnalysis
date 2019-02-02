import React from "react";
import Header from "./header";
import Home from "./home";
import ViewMore from "./viewMore";
import BroadCard from "./broadCard";

class Root extends React.Component{
    render(){
        return(
            <div>
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