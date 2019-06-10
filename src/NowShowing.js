import React, {Component} from 'react'



import MoviePanel from './components/nowshowing/MoviePanel.js';



class NowShowing extends Component{
    render(){
        return(
            <MoviePanel
                // posterURL={}
                title='Split'
                information='Though Kevin (James McAvoy) has evidenced 23 personalities to his trusted psychiatrist, Dr. Fletcher (Betty Buckley), there remains one still submerged who is set to materialize and dominate all of the others. Compelled to abduct three teenage girls led by the willful, observant Casey, Kevin reaches a war for survival among all of those contained within him -- as well as everyone around him -- as the walls between his compartments shatter.'
                showingtimes='13:00'
                />
        );
    }
}

export default NowShowing;