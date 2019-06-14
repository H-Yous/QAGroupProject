import React from 'react';
import { Carousel, Jumbotron, Container} from 'react-bootstrap';
import axios from 'axios'; 
import styled from 'styled-components'; 

const Styles = styled.div`
  .carousel {
    width:auto;
    height:auto;
    margin:auto;
    
  
    
  }

  .carousel-indicators .active{
    background-color: #f00;
    
}

.carousel-caption {
  
  color: white;
  &:hover {
    color: #bbb;
  }
 
  
  text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  -webkit-font-smoothing: antialiased;
  font-weight: bold;
}



`
class ControlledCarousel extends React.Component {
  componentDidMount(){
    var poster = new Array(3) 
    var title = new Array(3) 
    var disc = new Array(3) 

    axios.get('http://localhost:8080/api/getUpcomingMovies')
    .then(function (response) {
      
        for (var i = 0; i < 3; i++) {
          poster.push(response.data[i].poster);
          title.push(response.data[i].title);
          disc.push(response.data[i].description);
          }
          document.getElementById("poster1").src=response.data[0].poster;
          document.getElementById("poster2").src=response.data[1].poster;
          document.getElementById("poster3").src=response.data[2].poster;
          document.getElementById("poster4").src=response.data[3].poster;
          document.getElementById("poster5").src=response.data[4].poster;

          document.getElementById("title1").innerText=response.data[0].title;
          document.getElementById("title2").innerText=response.data[1].title;
          document.getElementById("title3").innerText=response.data[2].title;
          document.getElementById("title4").innerText=response.data[3].title;
          document.getElementById("title5").innerText=response.data[4].title;

          document.getElementById("desc1").innerText=response.data[0].description;
          document.getElementById("desc2").innerText=response.data[1].description;
          document.getElementById("desc3").innerText=response.data[2].description;
          document.getElementById("desc4").innerText=response.data[3].description;
          document.getElementById("desc5").innerText=response.data[4].description;



        // handle success
        
       
      })
      .catch(function (error) {
        // handle error
        
        console.log("This is the error");
        console.log(error);
      })
      .finally(function () {
        // always executed
      });
    }
    constructor(props, context) {
      super(props, context);
  
      this.handleSelect = this.handleSelect.bind(this);
  
      this.state = {
        index: 0,
        direction: null,
      };
    }
  
    handleSelect(selectedIndex, e) {
      this.setState({
        index: selectedIndex,
        direction: e.direction,
      });
    }

    render() {
        const { index, direction } = this.state;
    
        return (
          <Styles>
           
          <Carousel
            activeIndex={index}
            direction={direction}
            onSelect={this.handleSelect}
          >
            
            <Carousel.Item>
              <img
                id="poster1"
                className="d-block w-100"
                alt="First slide"           
              />
              <Carousel.Caption>
              <div className="overlay" />
                <h3 id="title1">First Movie</h3>
                <p id="desc1">Movie description</p>
                
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            
              <img
                id="poster2"
                className="d-block w-100"
                alt="Third slide"
              />
    
              <Carousel.Caption>
              
              <div className="overlay"></div>
            
                <h3 id="title2">Second Movie</h3>
                <p id="desc2">Movie description</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                id="poster3"
                className="d-block w-100"
                alt="Third slide"
              />
    
              <Carousel.Caption>
              <div className="overlay"></div>
                <h3 id="title3">Third Movie</h3>
                <p id="desc3">Movie description</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                id="poster4"
                className="d-block w-100"
                alt="Third slide"
              />
    
              <Carousel.Caption>
              <div className="overlay"></div>
                <h3 id="title4">Third Movie</h3>
                <p id="desc4">Movie description</p>
              </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
              <img
                id="poster5"
                className="d-block w-100"
                alt="Third slide"
              />
    
              <Carousel.Caption>
              <div className="overlay"></div>
                <h3 id="title5">Third Movie</h3>
                <p id="desc5">Movie description</p>
              </Carousel.Caption>
            </Carousel.Item>
            
          </Carousel>
          </Styles>
        );
      }
    }

    export default ControlledCarousel