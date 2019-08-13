import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Box from '@material-ui/core/Box';
import './App.css';
import Navbar from '../../../components/Navbar/index.jsx';
import Products from '../../Products/components/index.jsx'

function App() {
  return (
    <Box component="main" maxWith={false}>
      <Navbar></Navbar>

      <Router>
        <Route path="/" exact component={Products} />
      </Router>
    </Box>
  );
}

export default App;
