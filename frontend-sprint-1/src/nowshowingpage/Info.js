import React, {Component} from 'react';
import './nowShowing.css';

class Info extends Component{
    render() {
        const{info} = this.props;
        return(
            <span className='info'>
                Though Kevin (James McAvoy) has evidenced 23 personalities to his trusted psychiatrist, Dr. Fletcher (Betty Buckley), there remains one still submerged who is set to materialize and dominate all of the others. Compelled to abduct three teenage girls led by the willful, observant Casey, Kevin reaches a war for survival among all of those contained within him -- as well as everyone around him -- as the walls between his compartments shatter.
            </span>
        )
    }
}

export default Info;