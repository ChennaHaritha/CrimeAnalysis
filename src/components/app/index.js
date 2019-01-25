import React from "react";
import Home from "./home";
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css';
import style1 from "./styles/style1.css";
import RegisterCrime from "./registerCrimes";

const App = () => (
    <div className="mainDiv" style={style1}>
        <Home></Home>
        <RegisterCrime></RegisterCrime>
    </div>
);

export default App;