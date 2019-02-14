import React from "react";
import Home from "./home";
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css';
import RegisterCrime from "./registerCrimes";
import Sign from "./sign";
import Invest from "./invest";
import Root from "./Root";
import ViewMore from "./viewMore";
import MoreDetails from "./MoreDetails";
import Footer from "./footer";
import Maincomp from "./maincomp";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    
} from 'react-router-dom';
<<<<<<< HEAD
import Chart from "./chart";
=======
import Loginpage from "./loginpage";
>>>>>>> 2192789a4ec19d842aa951af93a43c06c7bd8baa


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
                 <Route path="/loginpage" component={Loginpage}/>

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