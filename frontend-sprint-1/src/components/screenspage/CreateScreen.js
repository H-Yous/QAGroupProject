import React, {Component} from 'react';



import { SeatsioSeatingChart } from '@seatsio/seatsio-react';


//USE WITH the following:
// <CreateScreen
// eventkey = '1-1-1'
// seatnumbers =...
// />

class ScreenCreation extends Component{
    render(){
        const{eventkey, seatnumbers} = this.props;
        return(
            <div id="event-manager">
            <SeatsioSeatingChart
                publicKey="254e39d5-d1cd-4d23-bc63-ae26cc602338"
                event={this.props.eventkey}
                divId= 'event-manager'
                //id="077099e8-60d2-63ed-a1ae-ce7b7f7220ef"
                pricing={[
                    {'category': 'Child', 'price': 5.99},
                    {'category': 'Student', 'price': 8.99},
                    {'category': 'Adult', 'price': 10.99}
                ]}
                priceFormatter={price => '£' + price}
            />

            </div>

            
            )    
    };
}

export default ScreenCreation;