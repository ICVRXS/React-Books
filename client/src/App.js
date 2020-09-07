import React from 'react';
import './App.css';
import { Container } from 'react-bootstrap';
import Header from './components/Header';
import NavBar from './components/NavBar';

function App() {
  return (
    <div>
      <NavBar />
      <Container>
        <Header />

        
      </Container>
    </div>
  );
}

export default App;
