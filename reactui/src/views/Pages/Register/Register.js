import React, {Component} from "react";
import {NavLink} from "react-router-dom";
import {Container, Row, Col, Card, CardBlock, CardFooter, Button, Input, InputGroup, InputGroupAddon} from "reactstrap";

class Register extends Component {

  handleCheckClick(i) {
      alert('Valid Passport.');
  }

  handleAddClick(i) {
      alert('New Passport Created.');
  }
  render() {
    return (
      <div className = "animated fadeIn">
        <div className="app flex-row align-items-center">
          <Container>
            <Row className="justify-content-center">
              <Col md="6">
                <Card className="mx-4">
                  <CardBlock className="card-body p-4">
                    <h1>Check/Add Passport</h1>
                    <p className="text-muted">Add new passport</p>
                  <InputGroup className="mb-3">
                    <Input type="text" placeholder="Passport ID"/>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Input type="text" placeholder="Name"/>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Input type="text" placeholder="Date of Birth"/>
                  </InputGroup>
                  <InputGroup className="mb-3">
                    <Input type="text" placeholder="Date Issued"/>
                  </InputGroup>
                      
                          <NavLink to="/dashboard">
                            <Button onClick={this.handleCheckClick} color="success" block>
                              Check Passport
                            </Button>
                          </NavLink>
                          <h3></h3>
                          <NavLink to="/dashboard">
                            <Button onClick={this.handleAddClick} color="success" block>
                              Add Passport
                            </Button>
                          </NavLink>
                  </CardBlock>

                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Register;
