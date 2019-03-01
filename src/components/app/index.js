import React from "react";
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css';

import RegisterCrime from "./RegisterCrime/registerCrimes";
import Sign from "./Signin/sign";
import Invest from "./Analyse/invest";
import Root from "./Root/Root";
import ViewMore from "./Allcards/viewMore";
import MoreDetails from "./MoreDetails";
import Maincomp from "./Analyse/maincomp";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    
} from 'react-router-dom';
import Loginpage from "./Signin/loginpage";




class App extends React.Component{
    render(){
        return(
            
            <Router>
                <div>
                 <Route exact path="/" component={Root} >    
                 </Route>
                 <Route exact path="/moredetails" component={MoreDetails}/>
                 <Route exact path="/maincomponent" component={Maincomp}/>
                 <Route path="/register" component={RegisterCrime} />
                 <Route path="/analyze" component={Invest} />
                 <Route path="/viewmore" component={ViewMore} />
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