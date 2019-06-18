import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";
import Form from "react-bootstrap/Form";

class LoginPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  validateLoginForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleLoginChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };
  handleLoginSubmit = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div className="login">
        <Form onSubmit={this.handleLoginSubmit}>
          <Form.Group controlID="login-email" bsSize="large">
            <Form.Control
              autoFocus
              type="email"
              onChange={this.handleLoginChange}
            />
          </Form.Group>

          <Form.Group controlID="login-password" bsSize="large">
            <Form.Control onChange={this.handleLoginChange} type="password" />
          </Form.Group>

          <Button
            block
            bsSize="large"
            disabled={!this.validateLoginForm()}
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
