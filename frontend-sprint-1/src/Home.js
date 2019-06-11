import React, {Component } from 'react'

import  ControlledCarousel  from './components/Carousel'; 
import grabPoster from './components/grabPoster';


class Home extends Component {

        render() {
            return  ( 

                    <div> 
                        <ControlledCarousel /> 
                    </div>
            )
    }
}

export default Home
