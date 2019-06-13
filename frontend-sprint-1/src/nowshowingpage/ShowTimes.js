import React, {Component} from 'react';
import './nowShowing.css';

class ShowTimes extends Component{
    constructor(){
        super();
        this.state = { selectedOption: '' };
        this.radioChange = this.radioChange.bind(this);
    }

    radioChange(e) {
        this.setState({
            selectedOption: e.currentTarget.value
        });
    }
    
    render() {
        const{showTimes} = this.props;

        return(
            <div className="showtimes">
                <input 
                    type="radio"
                    name="times"
                    value="09:15"
                    checked={this.state.selectedOption === "09:15"} 
                    onChange={this.radioChange}
                />09:15

                <input
                    type="radio"
                    name="times"
                    value="11:45"
                    checked={this.state.selectedOption === "11:45"}
                    onChange={this.radioChange}
                />11:45
                <input
                    type="radio"
                    name="times"
                    value="13:30"
                    checked={this.state.selectedOption === "13:30"}
                    onChange={this.radioChange}
                />13:30
                <input
                    type="radio"
                    name="times"
                    value="16:00"
                    checked={this.state.selectedOption === "16:00"}
                    onChange={this.radioChange}
                />16:00

                <h5>Showing selected: {this.state.selectedOption}</h5>
            </div>
        );
    }
}

export default ShowTimes;