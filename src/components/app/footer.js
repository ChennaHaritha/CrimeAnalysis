import React from "react";
<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>

const fa={
    padding: '20px',
    fontSize: '30px',
    width: '30px',
    textAlign: 'center',
    textDecoration: 'none',
    margin: '5px 2px',
    borderRadius: '50%'
  }
  
  /*const fa:hover{
      opacity: '0.7'
  }*/
  
  const facebook ={
    background: '#3B5998',
    color: 'white'
  }
  
  const twitter={
    background: '#55ACEE',
    color: 'white',
  }
  
  const google={
    background: '#dd4b39',
    color: 'white'
  }





class Footer extends React.Component {
    render() {
        return (
            <div className="container"> 
          <div className="row" style={fa}>
           <h5>@CopyRight reserved</h5>
           <a href="#" className="fa fa-facebook-official" style={facebook}>f</a>
           <a href="#" className="fa fa-github" style={twitter}></a>
           <a href="#" className="fa fa-google-plus-official" style={google}>G</a>
            
          </div>
        
        
      
        <div className="text-center center-block">
            <p className="txt-railway">@CopyRight reserved</p>
            <br />
                <a href="https://www.facebook.com/bootsnipp"><i id="social-fb" className="fa fa-facebook-square fa-3x social"></i></a>
	            <a href="https://twitter.com/bootsnipp"><i id="social-tw" className="fa fa-twitter-square fa-3x social"></i></a>
	            <a href="https://plus.google.com/+Bootsnipp-page"><i id="social-gp" className="fa fa-google-plus-square fa-3x social"></i></a>
	            <a href="mailto:bootsnipp@gmail.com"><i id="social-em" className="fa fa-envelope-square fa-3x social"></i></a>
</div>
   </div>


        );
    }
}

export default Footer;