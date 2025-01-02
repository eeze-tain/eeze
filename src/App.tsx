import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Grid } from '@mui/material';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import Tournaments from './pages/Tournaments';
import ThemeCustomisation from './pages/ThemeCustomisation';
import DynamicRewards from './pages/DynamicRewards';
import ExclusiveTournament from './pages/ExclusiveTournaments';

const App: React.FC = () => {

  return (
    <Grid container sx={{ height: '100vh', margin: 0, padding: 0 }}>
      {/* Navbar spans 3 columns, is sticky */}
      <Grid item xs={2.25} sx={{ position: 'sticky', top: 0, zIndex: 100 }}>
        <Navbar />
      </Grid>

      {/* Content spans the remaining 9 columns and has background image */}
      <Grid item xs={9.75} sx={{ 
        height: '100vh', 
        backgroundImage: 'url(/images/background.png)', 
        backgroundSize: 'cover', 
        backgroundPosition: 'center', 
        overflowY: 'auto',
        margin: 0
      }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/themes" element={<ThemeCustomisation />} />
          <Route path="/rewards" element={<DynamicRewards />} />
          <Route path="/exclusive" element={<ExclusiveTournament />} />
        </Routes>
      </Grid>
    </Grid>
  );
};

export default App;