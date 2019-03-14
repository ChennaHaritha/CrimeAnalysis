import React from "react";
class Marquee extends React.Component {
    constructor(props){
        var item;
        super(props);
        
        
        this.state = {
            datas : []
          }
      }
    
      componentDidMount() {
        
        const url = "http://localhost:9000/marqueeDetails"; 
        console.log(url);
        let headers = new Headers();
    
        headers.append('Content-Type', 'application/json');
        headers.append('Accept', 'application/json');
    
        headers.append('Access-Control-Allow-Origin', url);
        headers.append('Access-Control-Allow-Credentials', 'true');
    
        headers.append('GET', 'POST');
    
        fetch(url, {
            headers: headers,
            method: 'GET'
        })
        .then(response => response.json())
        .then(contents => {console.log("in fetch: "+ contents);
                            this.setState ({
                            datas : contents})
            })
        .catch(() => console.log("Can’t access " + url + " response. "))
      }
    render() {
        return (
            <marquee behaviour="alternate">Most commited crimes in {this.state.datas} <span class="badge badge-danger">new</span></marquee>
        )
    }

}

export default Marquee;