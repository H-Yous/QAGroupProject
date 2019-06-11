import React, {Component } from 'react'
import axios from 'axios' 
import  ControlledCarousel  from './components/Carousel'; 


class Home extends Component {
    componentDidMount(){
        axios.get('http://localhost:8080/api/movies')
        .then(res => {
        console.log(res)
            })
        }
        
        render() {
            return  ( 

                    <div> 
                        <ControlledCarousel /> 
                    </div>
            )
    }
}
export default Home
