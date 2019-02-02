import React from "react";
import BroadCard from "./broadcard";
import Header from "./header";
import Card from "./card";

class ViewMore extends React.Component{
    render(){
        return(
            <div>
                <div>
                <Header/>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <BroadCard desc="This is from root"
                                  desc1="this is 2nd"
                        ></BroadCard>
                        <BroadCard desc="This is from root"
                                  desc1="this is 2nd"
                        ></BroadCard>
                        
                    </div>
                </div>
            </div>
            

        )
    }
}

export default ViewMore;