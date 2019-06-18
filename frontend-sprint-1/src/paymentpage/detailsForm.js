import React, {Component} from 'react';
import { Form, Col } from 'react-bootstrap';

class DetailsForm extends Component {
    render() {
      return (
<Form>
        <Form.Row>  
      <Form.Group as={Col} controlId="formGridFirstName">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="email" placeholder="Enter Name" />
      </Form.Group>

      <Form.Group as={Col} controlId="formGridLastName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control />
    </Form.Group>

      </Form.Row>

      <Form.Row>  
    <Form.Group as={Col} controlId="formGridEmail">
      <Form.Label>Email</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
    </Form.Group>

  </Form.Row>

  <Form.Group controlId="formGridAddress1">
    <Form.Label>Address</Form.Label>
    <Form.Control placeholder="1234 Main St" />
  </Form.Group>

  <Form.Group controlId="formGridAddress2">
    <Form.Label>Address 2</Form.Label>
    <Form.Control placeholder="Apartment, studio, or floor" />
  </Form.Group>

  <Form.Row>
    <Form.Group as={Col} controlId="formGridCity">
      <Form.Label>City</Form.Label>
      <Form.Control />
    </Form.Group>

    <Form.Group as={Col} controlId="formGridZip">
      <Form.Label>Post Code</Form.Label>
      <Form.Control />
    </Form.Group>
  </Form.Row>
      </Form>


        
      );
    }
  }
  
  export default DetailsForm;