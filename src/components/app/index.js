import React from "react";
import Home from "./home";
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css';
import style1 from "./styles/style1.css";
import RegisterCrime from "./registerCrimes";
import Sign from "./sign";
import Invest from "./invest"
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
} from 'react-router-dom'
import Maincomp from "./maincomp";


class App extends React.Component{
    render(){
        return(
            <Router>
                <div>
                 <Route exact path="/" component={Home} />
                 
                 <Route path="/register" component={RegisterCrime} />
                 <Route path="/analyze" component={Invest} />
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