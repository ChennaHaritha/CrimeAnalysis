import React from "react";
import {Link} from "react-router-dom"
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




const button = {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '14px 20px',
    margin: '8px 0',
    cursor: 'pointer',
    paddingRight: '20px',
    borderRadius: '5px',
    boarder:'50px',
    marginTop:'30px',
    marginRight:'5px',
    marginLeft:'10px'
    
};

const loginbutton = {
    float:'right',
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '14px 20px',
    marginTop: '30px',
    cursor: 'pointer',
    paddingRight: '20px',
    borderRadius: '5px',
    boarder:'50px',
    marginRight:'20px'
    
    
};

const main= {
    margin:'30px'
};





class Header extends React.Component {
    /*onLogin(){
        this.props.history.push("/register");
    }*/
    render() {
        return (
            <div>  
                 <div>  
                    <button style={button} >&#8249;</button>
                    <button style={button}>&#8250;</button>
                    <button style={loginbutton} >Login</button>
                    
                </div>
                <div>
                    <Navbar color="dark" light expand="md">
                        <Collapse navbar>
                            <Nav >
                                <NavItem>
                                    <NavLink href="/" >Home</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/register">Register Crime</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/analyze">Analyze</NavLink>
                                </NavItem>
                                <NavItem className="navbar-nav ml-auto" >
                                    <form className="navbar-form" action="/action_page.php" >                
                                        <input type="text" className="form-control" placeholder="Search" style={{marginLeft:'20px'}}/>
                                     </form>
                                </NavItem>
                                <NavItem>
                                    <button type="submit" style={{marginLeft:'30px'}}className="btn btn-outline-success my-2 my-sm-0">Submit</button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </Navbar>
                    </div>
                
            </div>
        )
    }
}

export default Header;
    
