import React from "react";




let fa={

  position:'relative',
	borderRadius:'60%',
   
    
  fontSize:'40px',
  cursor:'pointer',
  
  color:'white'
  }
  const but={
    borderRadius:'150%',
    width:'160%',
    height:'160%',
   
   
  }
  const but1={
    borderRadius:'150%',
    width:'110%',
    height:'110%',
  }
  const but2={
    borderRadius:'150%',
    width:'90%',
    height:'100%',
  }
  const but3={
    borderRadius:'150%',
    width:'120%',
    height:'110%',
  }
  /*const fa:hover{
      opacity: '0.7'
  }*/
  
  let facebook ={
    backgroundColor: '#3b5998',
    
    
  }
  
  let twitter={
    backgroundColor: 'DodgerBlue',
  
  }
 let google={
    backgroundColor: 'red',
    
  }
let linkedin={
  backgroundColor:'#4875B4'
}


const pagefooter={
  
  backgroundColor:'#B7E9F7'
}
const unorderedlist={
  textAlign:'center',
  paddingTop:'20px',
  
}
const listpad={
  paddingRight:'20px'
}
const listpad1={
  paddingRight:'30px'
}
class Footer extends React.Component {
    render() {
        return (
        
      <footer className="page-footer " style={pagefooter}>
      <div className="container" >

      <ul className="list-unstyled list-inline text-center" style={unorderedlist}>
      <li className="list-inline-item" style={listpad1}>
        <a className="btn-floating btn-fb mx-1"   style={{...fa, ...facebook}}>
          <i className="fa fa-facebook" style={but} > </i>
        </a>
      </li>
      <li className="list-inline-item" style={listpad}>
        <a className="btn-floating btn-tw mx-1"    style={{...fa, ...twitter}}>
          <i className="fa fa-twitter" style={but1}> </i>
        </a>
      </li>
      <li className="list-inline-item" style={listpad}>
        <a className="btn-floating btn-gplus mx-1"  style={{...fa, ...google}}>
          <i className="fa fa-google-plus" style={but2}> </i>
        </a>
      </li>
      <li className="list-inline-item" style={listpad}>
        <a className="btn-floating btn-li mx-1"  style={{...fa, ...linkedin}}>
          <i className="fa fa-linkedin" style={but3}> </i>
        </a>
      </li>
      
    </ul>
    
    </div>
    
    <div className="footer-copyright text-center py-3">© 2019 Copyright:
      <a href="https://mdbootstrap.com/education/bootstrap/"> CrimeAnalysis.com</a>
    </div>
    

    </footer>

        );
    }
}

export default Footer;