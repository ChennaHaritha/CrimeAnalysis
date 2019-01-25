import React from "react";
import crime1 from "./images/crime1.jpg";
import bargraph from "./images/bargraph.png";
import '!style-loader!css-loader!bootstrap/dist/css/bootstrap.min.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';

const loginButton = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '14px 20px',
    margin: '8px 0',
    cursor: 'pointer',
    paddingRight: '20px',
    borderRadius: '5px',
    boarder:'50px',
    float:'right',
    margin:'30px'
    
};

const main= {
    margin:'30px'
}
const heading={
    fontSize: '100px',
    fontStyle:'oblique',
    color:'#8B0000',
    lineHeight: '40px',
    textAlign: 'center',
    marginLeft:'300px',
    marginTop:'150px',
    paddingBottom:'50px'
}
const marequeStyle={
    fontSize:'20px',
    paddingBottom:'50px'
}



const rowMainStyling = {
    marginTop: '40px'

}

const imgStyle = {
    width:'100px',
    height:'100px'
  };
 
const divStyle = {
    width:'200px',
    border:'1px solid #D3D3D3',
    margin:'15px'
  };

  const containerStyle = {
   border: '3px solid #D3D3D3',
   'border-radius': '10px',
   'margin-top': '15px',
   'padding-left': '15px',
   'margin-bottom': '15px'
   }

   //<div className="container" >

   /*
         <nav className="navbar navbar-light bg-dark justify-content-between">
                        <ul>
                            <li><a href="#home">Home</a></li>
                            <li><a href="#news">News</a></li>
                            <li><a href="#contact">Contact</a></li>
                            <li style={{float:'right'}}> 
                                <form className="form-inline">
                                    <input className="form-control mr-sm-4" type="search" placeholder="Search" aria-label="Search"/>
                                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                                </form> 
                            </li>
                        </ul>
                        </nav>

        <div className="col-md-8 " >
                        <nav className="navbar navbar-inverse">
                            <div className="container-fluid">
                                <div className="navbar-header">
                                <a className="navbar-brand" href="#">WebSiteName</a>
                                </div>
                                <ul className="nav navbar-nav">
                                <li className="active"><a href="#">Home</a></li>
                                <li><a href="#">Page 1</a></li>
                                <li><a href="#">Page 2</a></li>
                                </ul>
                                <form className="navbar-form navbar-left" action="/action_page.php">
                                <div className="form-group">
                                    <input type="text" class="form-control" placeholder="Search"/>
                                </div>
                                <button type="submit" class="btn btn-default">Submit</button>
                                </form>
                            </div>
                        </nav>
                        </div>

   */
   

class Home extends React.Component {
    render() {
        return (
            <div style={main}>     
            
                <button style={loginButton}>Login</button>
                
                    <div className="row" style={rowMainStyling}>
                        <center>
                            <p style={heading}>CRIME ANALYSIS</p>
                            </center>
                            <marquee >Most commited crimes in Kukatpally<span className="badge">5</span></marquee>
                    </div>

               
                
                    <Navbar color="dark" light expand="md">
         
        
          <Collapse navbar>
            <Nav >
            
              <NavItem>
                <NavLink href="/components/">Components</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
              </NavItem>
             
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  Options
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    Option 1
                  </DropdownItem>
                  <DropdownItem>
                    Option 2
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem className="float-right">
              <form className="navbar-form navbar-right" action="/action_page.php" >
                                
                                    <input type="text" className="form-control" placeholder="Search"/>
                                    </form>
                                    </NavItem>
                                    <NavItem>
                                <button type="submit" className="btn btn-outline-success my-2 my-sm-0">Submit</button>
                               
                                
                                
                                </NavItem>
              </Nav>
          </Collapse>
        </Navbar>
       
        
       
                    

                   
                    

                        <br/>
                        

                        
                    
                       
                   

                    <div className="row" >
                        <div className="col-md-8 " style={containerStyle}>
                         <div className="row">
                         <div className="col-md-4 " >
                    
                           <h2>Card Image</h2>
                            <p>Image at the top </p>
                            <div className="card" style={divStyle}>
                                <img className="card-img-top" src={crime1} style={imgStyle}/>
                                <div className="card-body">
                                    <h4 className="card-title">John Doe</h4>
                                    <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                                    <a href="#" className="btn btn-primary">See Profile</a>
                                </div>
                            </div>
                            </div>
                            <div className="col-md-4 " >
                                <h2>Card Image</h2>
                                <p>Image at the top (card-img-top):</p>
                                <div className="card" style={divStyle}>
                                    <img className="card-img-top" src={crime1} style={imgStyle}/>
                                    <div className="card-body">
                                        <h4 className="card-title">John Doe</h4>
                                        <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                                        <a href="#" className="btn btn-primary">See Profile</a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-4 " >
                                <h2>Card Image</h2>
                                <p>Image at the top (card-img-top):</p>
                                <div className="card" style={divStyle}>
                                    <img className="card-img-top" src={crime1} style={imgStyle}/>
                                    <div className="card-body">
                                        <h4 className="card-title">John Doe</h4>
                                        <p className="card-text">Some example text some example text. John Doe is an architect and engineer</p>
                                        <a href="#" className="btn btn-primary">See Profile</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    
                   
                        </div>
                        <div className="col-md-4">
                        <img className="card" src={bargraph} style={imgStyle}/>
                          
                       

                     
                   
                        </div>
                    </div>
                </div>
            

            
        );
    
    }
}

export default Home;