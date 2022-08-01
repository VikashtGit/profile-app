import React, { Component } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { Form, Col, Row, Container } from "react-bootstrap";
import Pincode from "react-pincode";
import Paper from "@mui/material/Paper";

class AddressDetails extends Component {
  constructor(props){
    super(props)
    this.state = {
      Pincode: " ",
      text: " "
    }
    
  }
  render() {
    return (
      <>
        <Container className="font-weight-bold p-5 " style={{}}>
<Paper>
        <Row className="mb-5">
            <Col className='mx-3'>
            <Form.Group className="mb-3 mx-3" controlId="fName">
                <Form.Label>Country:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
          </Row>
          <Row className="mb-5">
          <Col>
              <Form.Group className="mb-3 mx-3" controlId="fName">
                <Form.Label>Street Address:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
           </Row>

          <Row className="mb-5">
            <Col className='mx-3'>
            <Form.Group className="mb-3 mx-3" controlId="fName">
                <Form.Label>city:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
            <Col className='mx-3'>
            <Form.Group className="mb-3 mx-3" controlId="fName">
                <Form.Label>Pin Code:</Form.Label>
                <Form.Control type="number" placeholder="Pin Code" value={this.state.numver} />
              </Form.Group>
            </Col>
          </Row>

          <Row className="mb-5">
            <Col className='mx-3'>
            <Form.Group className="mb-3 mx-3" controlId="fName">
                <Form.Label>State:</Form.Label>
                <Form.Control type="text" />
              </Form.Group>
            </Col>
            <Col className='mx-3'>
            <Form.Group className="mb-3 mx-3" controlId="fName">
                <Form.Label>Email Address:</Form.Label>
                <Form.Control type="email" />
              </Form.Group>
            </Col>
          </Row>
          </Paper>
        </Container>
      </>
    );
  }
}

export default AddressDetails;
