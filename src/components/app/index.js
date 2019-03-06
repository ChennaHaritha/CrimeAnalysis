import React from "react";
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css';

import RegisterCrime from "./RegisterCrime/registerCrimes";
import Sign from "./Signin/sign";
import Invest from "./Analyse/invest";
import Root from "./Root/Root";
import ViewMore from "./Allcards/viewMore";
import MoreDetails from "./MoreDetails";
import Maincomp from "./Analyse/maincomp";
import Loginpage from "./Signin/loginpage";



import {
    BrowserRouter as Router,
    Route,
    Switch,
    Redirect,
    
} from 'react-router-dom';




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


export default App;