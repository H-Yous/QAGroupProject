import React, {Component} from 'react';
import CreateScreen from './CreateScreen.js';

class BookingChart extends Component{
    state = this.props.location.state;


    render(){
        return(
            <div id="venue_map">{this.state}
            <CreateScreen
            publicKey='254e39d5-d1cd-4d23-bc63-ae26cc602338'
            eventKey='1-1-1'
            maxObjects={3}
            movie={this.state}
            async
            />
            </div>



        )
    };
}

export default BookingChart;