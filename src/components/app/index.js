import React from "react";
import Home from "./home";
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css';
import style1 from "./styles/style1.css";
import RegisterCrime from "./registerCrimes";
import Sign from "./sign";
import Header from "./header";
import Invest from "./invest";
import Root from "./Root";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    
} from 'react-router-dom'
import { IndexRoute } from 'react-router';


class App extends React.Component{
    render(){
        return(
            <Router>
                <div>
                 <Route exact path="/" component={Root} >
                 <Route path="/register" component={RegisterCrime} />
                    
                    
                 </Route>
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