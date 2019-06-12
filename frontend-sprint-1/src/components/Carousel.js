import React from 'react';
import { Carousel} from 'react-bootstrap';
import axios from 'axios'; 
import styled from 'styled-components'; 

const Styles = styled.div`
  .carousel {
    width:400px;
    height:auto;
    margin:auto;
  }

`
class ControlledCarousel extends React.Component {
  componentDidMount(){
    var poster = new Array(3) 

    axios.get('http://localhost:8080/api/getUpcomingMovies')
    .then(function (response) {
      
        for (var i = 0; i < 3; i++) {
          poster.push(response.data[i].poster);
          }
          document.getElementById("poster1").src=response.data[0].poster;
          document.getElementById("poster2").src=response.data[1].poster;
          document.getElementById("poster3").src=response.data[2].poster;
        // handle success
        console.log("This is the response");
       
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
                <h3>First Movie</h3>
                <p>Movie description</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                id="poster2"
                className="d-block w-100"
                alt="Third slide"
               
               
                
              />
    
              <Carousel.Caption>
                <h3>Second Movie</h3>
                <p>Movie description</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                id="poster3"
                className="d-block w-100"
                alt="Third slide"
               

              />
    
              <Carousel.Caption>
                <h3>Third Movie</h3>
                <p>Movie description</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
          </Styles>
        );
      }
    }

    export default ControlledCarousel