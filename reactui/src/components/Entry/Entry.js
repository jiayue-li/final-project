import React, {Component} from 'react';
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
} from 'reactstrap';

class Entry extends Component {

    constructor(props) {

        super(props);

    }

    handleClick(i) {
        alert('Passport from embassy requested.');
    }

    render() {
        return (

                <tr>
                  
                    <td className="text-center">
                      <div className="avatar">
                        <img src={'img/logo.png'} className="img-avatar"/>
                        <span className="avatar-status badge-success"></span>
                      </div>
                    </td>
                  
                    <td>
                      <div>
                      {this.props.name}
                      </div>
                      <div className="small text-muted">
                        Address: 3456ujnbgytyuoiekmnbhuasfdoiuiyu8
                      </div>
                    </td>
                  
                    <td className="text-center">
                      <div>128</div>
                    </td>
                   
                    <td className="text-center">
                      <div>0.10 ETH</div>
                    </td>
                  
                    <td className="text-center">
                      <div>Open</div>
                    </td>
                    
                    <td className="text-center">
                      <Button onClick={this.handleClick}>Purchase</Button>
                    </td>
                  
                  </tr>
        )
    }
}

export default Entry;
