import React from "react";
import {BarChart} from 'react-easy-chart';


class Bargraph extends React.Component{
    constructor(props){
        var item;
        super(props);
        
        
        this.state = {
            datas : []
          }
      }
    
      componentDidMount() {
        //const url = "http://10.10.200.12:9000/foods"; 
        const url = "http://localhost:9000/graphDetails"; 
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
    render(){
       // console.log("MM",this.state.datas);
       
        return(
            <div>
                <div>
      
        { Object.keys(this.state.datas).forEach(function (key) {
          console.log('key: ', key); 
          console.log(this.state.datas[key]) // Returns key: 1 and key: 2
          
        }, this)}
        
      </div>
            
            <BarChart
                axisLabels={{x: 'My x Axis', y: 'My y Axis'}}
                axes
                height={650}
                width={450}
                colorBars
                data={[
                    {
                        x: "Robbery",
                        y: this.state.datas["Robbery"]
                    },
                    {
                        x: "Murder",
                        y: this.state.datas["Murder"]
                    },
                    {
                        x: 'Missing person',
                        y: this.state.datas["Missing Person"]
                    } ,
                    {
                        x: 'Cyber crime',
                        y: this.state.datas["Cyber crime"]
                    }, 
                    {
                        x: 'Rape',
                        y: this.state.datas["Rape"]
                    } 
                    ]}
                />
                </div>
                  )
                }
            }

export default Bargraph;