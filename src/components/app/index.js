import React from "react";
import Home from "./home";
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css';
import RegisterCrime from "./registerCrimes";
import Sign from "./sign";
import Invest from "./invest";
import Root from "./Root";
import ViewMore from "./viewMore";
import MoreDetails from "./MoreDetails"

import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    
} from 'react-router-dom';
import Chart from "./chart";


class App extends React.Component{
    render(){
        return(
            
            <Router>
                <div>
                 <Route exact path="/" component={Root} >    
                 </Route>
                 <Route exact path="/moredetails" component={MoreDetails}/>
                 <Route path="/register" component={RegisterCrime} />
                 <Route path="/analyze" component={Invest} />
                 <Route path="/viewMore" component={ViewMore} />
                 <Route path="/sign" component={Sign}/>
                 </div>
            </Router>
           
        )
    }
}

/*const App = () => (
    <div className="mainDiv" style={style1}>
        <Home></Home>
        <Sign></Sign>
        <RegisterCrime></RegisterCrime>
    </div>
);*/

export default App;