import React, {Component} from 'react'


import screen1 from './components/screenspage/Screen1.png';
import screen2 from './components/screenspage/Screen2.png';



import CreateScreen from './components/screenspage/CreateScreen';


class Screens extends Component{
    render(){
        return(
            
            <center>
                <CreateScreen
                eventkey = '1-1-1'
                />
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
            </div>
            </center>
            
            

           
        )
    };
}
export default Screens;