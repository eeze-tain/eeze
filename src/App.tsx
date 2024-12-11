import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Grid } from '@mui/material';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import Tournaments from './pages/Tournaments';

const App: React.FC = () => {
  return (
    <Grid container sx={{ height: '100vh', margin: 0, padding: 0 }}>
      {/* Navbar spans 3 columns, is sticky */}
      <Grid item xs={2} sx={{ position: 'sticky', top: 0, zIndex: 100 }}>
        <Navbar />
      </Grid>

      {/* Content spans the remaining 9 columns and has background image */}
      <Grid item xs={10} sx={{ 
        height: '100vh', 
        backgroundImage: 'url(/eeze/images/background.png)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        overflowY: 'auto',
        margin: 0
      }}>
        <Routes>
          <Route path="/eeze" element={<Home />} />
          <Route path="/tournaments" element={<Tournaments />} />
        </Routes>
      </Grid>
    </Grid>
  );
};

export default App;