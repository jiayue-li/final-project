import React, {Component} from "react";
import {Bar, Line} from "react-chartjs-2";
import {NavLink} from "react-router-dom";
import {
  Badge,
  Button,
  Row,
  Col,
  Progress,
  Card,
  CardHeader,
  CardBlock,
  Form,
  FormGroup,
  Input,
  Table
} from "reactstrap";

import Application from "../../components/Application/Application"

class Dashboard extends Component {

  constructor(props) {
    super(props);
  }

  
  handleClick(i) {
      alert('New passport requested.');
  }

  render() {

    // get info here
    return (
           <div className="animated fadeIn">
                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                User
                            </CardHeader>
                            <CardBlock>
                            
                                <Application you={true}/>
                              
                            </CardBlock>
                            </Card>
                        </Col>
                </Row>

                <Row>
                    <Col>
                        <Card>
                            <CardHeader>
                                Embassy Options
                                <div className="float-right">
                                  <NavLink to="/register">
                                    <Button color="success">
                                      Add/Check Passport
                                    </Button>
                                  </NavLink>
                                    
                                </div>

                            </CardHeader>

                            </Card>
                        </Col>
                      </Row>
            </div>
    )
  }
}

export default Dashboard;
