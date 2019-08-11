import React from 'react';
import Box from '@material-ui/core/Box';
import './App.css';
import Navbar from '../../../components/Navbar/index.jsx';

function App() {
  return (
    <Box component="main" maxWith={false}>
      <Navbar></Navbar>
    </Box>
  );
}

export default App;
