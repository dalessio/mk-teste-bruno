import React from 'react';
import './App.css';

import Container from 'react-bootstrap/Container';
import MenuHeader from "./projeto-teste/modules/components/Menus/pages/MenuHeader";

import {BrowserRouter as Router} from 'react-router-dom';

function App() {
  return (
  <Router>
    <Container className="p-5">
        <MenuHeader />    
    </Container>
  </Router>

  );
}

export default App;
