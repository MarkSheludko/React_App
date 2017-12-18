import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { Navbar, Nav, NavItem, MenuItem, NavDropdown} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

      <Navbar className="floaterRight">
            <Navbar.Header>
            <Navbar.Brand>
                <a className="release" href="#">When Release</a>
            </Navbar.Brand>
            </Navbar.Header>
            <Nav>
            <NavItem eventKey={1}><Link to='/'>Home</Link></NavItem>
            <NavItem eventKey={2}><Link to='/popular'>Popular</Link></NavItem>
            <NavItem eventKey={2}><Link to='/schedule'>Latest</Link></NavItem>
            </Nav>
        </Navbar>


        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <Route path="/popular/:popularId" component={popularId}/>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
      </Router>
    );
  }
}

const popularId = ({}) => {
  <div>
    <h1>ASDASDASDASD</h1>
  </div>
}


export default App;
