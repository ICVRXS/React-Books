import React, {useEffect} from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/NavBar';
import Search from './pages/Search';
import Saved from './pages/Saved';

function App() {

  return (
    <div>
      <NavBar />
      <Container>
        <Header />
        <Router>
          <Route exact path="/" component={Search} />
          <Route exact path="/search" component={Search} />
          <Route exact path="/saved" component={Saved} />
        </Router>
      </Container>
    </div>
  );
}

export default App;
