import React, {Component} from 'react';
import { Button, FormGroup, FormControl} from "react-bootstrap";
import Form from 'react-bootstrap/Form';




class LoginPanel extends Component{

    constructor (props){
        super(props);

        this.state = {
            email: "",
            password: ""
        };
    }

    validateForm(){
        return this.state.email.length> 0 && this.state.password.length > 0;
    }

    handleChange = event =>{
        this.setState({
            [event.target.id]: event.target.value
        });
    }
    handleSubmit = event =>{
        event.preventDefault();
    }

    render(){
        return(
            <div className="Login">
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group controlID="email" bsSize="large">
                        <Form.Control
                          autoFocus
                          type="email"
                          
                          onChange={this.handleChange}
                          />
                          </Form.Group>
                          <Form.Group controlID="password" bsSize="large">
                              <Form.Control
                              
                              onChange={this.handleChange}
                              type="password"
                              />
                          </Form.Group>
                          <Button
                          block
                          bsSize ="large"
                          disabled={!this.validateForm()}
                          type="submit"
                          >
                              Login
                              </Button>
                              </Form>
                              </div>
        );
    }
}

export default LoginPanel;