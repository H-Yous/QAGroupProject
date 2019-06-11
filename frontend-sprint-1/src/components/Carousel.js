import React from 'react';
import { Carousel} from 'react-bootstrap';
import it from '../assets/it.jpg'
import aliens from '../assets/aliens.jpg'
import avengers from '../assets/avengers.jpg'

class ControlledCarousel extends React.Component {
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
          <Carousel
            activeIndex={index}
            direction={direction}
            onSelect={this.handleSelect}
          >
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={it}
                alt="First slide" 
                height="500"
                
                
              />
              <Carousel.Caption>
                <h3>First Movie</h3>
                <p>Movie description</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={aliens}
                alt="Third slide"
                height="500"
               
                
              />
    
              <Carousel.Caption>
                <h3>Second Movie</h3>
                <p>Movie description</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={avengers}
                alt="Third slide"
                height="500"

              />
    
              <Carousel.Caption>
                <h3>Third Movie</h3>
                <p>Movie description</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        );
      }
    }

    export default ControlledCarousel