import React, {Component} from 'react';



import { SeatsioSeatingChart } from '@seatsio/seatsio-react';


/*
USE THIS CLASS WITH the following:
<CreateScreen
eventkey = '1-1-1'
seatnumbers =...
/>
*/

class ScreenCreation extends Component{
    render(){
        const{eventkey, seatnumbers} = this.props;
        return(
            <div id="event-manager">
            <SeatsioSeatingChart
                publicKey="254e39d5-d1cd-4d23-bc63-ae26cc602338"
                event={this.props.eventkey}
                divId= 'event-manager'
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