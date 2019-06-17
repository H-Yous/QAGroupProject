import React, {Component} from 'react';
import CreateScreen from './CreateScreen.js';

class BookingChart extends Component{
    render(){
        return(
            <div id="venue_map">
            <CreateScreen
            publicKey='254e39d5-d1cd-4d23-bc63-ae26cc602338'
            eventKey='1-1-1'
            maxObjects={3}
            />
            </div>



        )
    };
}

export default BookingChart;