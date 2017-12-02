import React, {Component} from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import {Container} from 'reactstrap';
import Header from '../../components/Header/';
import Dashboard from '../../views/Dashboard/';
import Register from '../../views/Pages/Register/';

class Full extends Component {
  render() {

    return (

      <div className="app">

          <Header />
          <div className="app-body">
              <main className="main">
                  <Container fluid>
                      <Switch>
                          <Route path="/register" name="Register" component={Register}/>
                          <Route path="/dashboard" name="Dashboard" component={Dashboard}/>
                          <Redirect from="/" to="/dashboard"/>
                      </Switch>
                  </Container>
          </main>
        </div>
      </div>
    );
  }
}

export default Full;
