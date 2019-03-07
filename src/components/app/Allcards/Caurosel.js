import React from "react";
import {Carousel} from 'react-bootstrap';

import crime1 from '../images/crime1.jpg';
import cybercrime1 from '../images/cybercrime1.jpg';
import murder from "../images/murder.jpeg"
import CarouselCaption from "react-bootstrap/CarouselCaption";

const imgStyle ={
    
    width:1200,
    height:550,
  
}

const carouselStyle= {
        marginLeft:10
  }

  
  const MyCarousel = ({ items }) => (
    <div className="root">
      <Carousel controls={false}>
        {items.map((item, i) =>
                   <Carousel.Item key={i}>
                      <a className="thumbnail" href="javascript:void(0)">
                        <img  style={imgStyle}
                          src={cybercrime1}
                          alt={item.alt}
                        />
                      </a>
                      <CarouselCaption>
                      <h2>{item.crimetype}</h2>
      <p>{item.description}</p>
                      </CarouselCaption>
                    </Carousel.Item>)
                
                
               
                
                }
      </Carousel>
    </div>
  )
  
  const ITEMS = [
    {
      img: 'https://placehold.it/350x150?text=Slide3',
      alt: 'Slide 3',
      crimetype: 'Robbery',
      description: 'Hello girl'
    },
    {
      img: 'https://placehold.it/350x150?text=Slide2',
      alt: 'Slide 2',
      crimetype: 'Robbery1',
      description: 'Hello girl'
    }
  ]
  
  class Slider extends React.Component {
    constructor(props){
        super(props);
        this.onButtonChange =this.onButtonChange.bind(this)
        this.state = {
          data : []
        }
      }
      onButtonChange() {
        let path=`Allnews`;
        this.props.history.push(path);
      }
    
      componentDidMount() {
        //const url = "http://10.10.200.12:9000/foods"; 
        const url = "http://localhost:9000/newsFeed"; 
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
                            data : contents})
            })
        .catch(() => console.log("Can’t access " + url + " response. "))
      }
    render(){
      return (
        <div>
          
         
          <MyCarousel items={this.state.data} />
        </div>
      )
    }
  }
  export default Slider; 
  
  