import React, {Component } from 'react'
import axios from 'axios' 

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
                    <h2>Hello World</h2>
                    <p>Passage its ten led hearted removal cordial. Preference any astonished unreserved mrs. 
                    Prosperous understood middletons in conviction an uncommonly do. Supposing so be resolving breakfast am or perfectly. Is drew am hill from mr. Valley by oh twenty direct me so. Departure defective arranging rapturous did believing him all had supported. Family months lasted simple set nature vulgar him. Picture for attempt joy excited ten carried manners talking how. Suspicion neglected he resolving agreement perceived at an. </p>
                    <p>Received shutters expenses ye he pleasant. Drift as blind above at up. No up simple county stairs do should praise as. Drawings sir gay together landlord had law smallest. Formerly welcomed attended declared met say unlocked. Jennings outlived no dwelling denoting in peculiar as he believed. Behaviour excellent middleton be as it curiosity departure ourselves. 
                    </p>
                    <p>Guest it he tears aware as. Make my no cold of need. He been past in by my hard. Warmly thrown oh he common future. Otherwise concealed favourite frankness on be at dashwoods defective at. Sympathize interested simplicity at do projecting increasing terminated. As edward settle limits at in. Chapter too parties its letters nor. Cheerful but whatever ladyship disposed yet judgment. Lasted answer oppose to ye months no esteem. Branched is on an ecstatic directly it. Put off continue you denoting returned juvenile. Looked person sister result mr to. Replied demands charmed do viewing ye colonel to so. Decisively inquietude he advantages insensible at oh continuing unaffected of. </p>
                    </div>
            )
    }
}
export default Home
