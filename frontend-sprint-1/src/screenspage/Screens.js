import React, {Component} from 'react'

import screen1 from './Screen1.png';
import screen2 from './Screen2.png';
import screen3 from './Screen3.png';



import CreateScreen from './CreateScreen';


class Screens extends Component{
    render(){
        return(
            
            <center>
                <br/>
                <br/>
            <div>
                Screen One
                <div>
                    <img
                    src={screen1}
                    height={398}
                    width={698}
                    />
                </div>

                <br/>
                <br/>
                Screen Two
                <div>
                    <img
                    src={screen2}
                    height={500}
                    width={698}
                    />
                </div>
                <br/>
                <br/>
                Screen Three
                <div>
                    <img
                    src={screen3}
                    height={700}
                    width={698}
                    />
                </div>
            </div>
            </center>
            
            

           
        )
    };
}
export default Screens;