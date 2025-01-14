import { Grid } from '@mui/material';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/NavBar';
import DynamicRewards from './pages/DynamicRewards';
import ExclusiveTournament from './pages/ExclusiveTournaments';
import FreeChips from './pages/FreeChips';
import Home from './pages/Home';
import Roadmap from './pages/Roadmap';
import ThemeCustomisation from './pages/ThemeCustomisation';
import Tournaments from './pages/Tournaments';

const App: React.FC = () => {
  return (
    <Grid
      container
      sx={{
        height: '100%',
        margin: 0,
        padding: 0,
        backgroundImage: 'url(/images/background.png)',
        backgroundSize: '101vw 101%',
        backgroundPosition: 'center',
      }}
    >
      {/* Navbar is sticky */}
      <Grid
        item
        xs={2.55}
        sx={{ height: '100vh', position: 'sticky', top: 0, zIndex: 100 }}
      >
        <Navbar />
      </Grid>

      {/* Content spans the remaining 10.20 columns and has a background image */}
      <Grid
        item
        xs={9.45}
        sx={{
          height: '100%',
          overflowY: 'auto',
          margin: 0,
        }}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/tournaments" element={<Tournaments />} />
          <Route path="/themes" element={<ThemeCustomisation />} />
          <Route path="/rewards" element={<DynamicRewards />} />
          <Route path="/exclusive" element={<ExclusiveTournament />} />
          <Route path="/freechips" element={<FreeChips />} />
          <Route path="/roadmap" element={<Roadmap />} />
        </Routes>
      </Grid>
    </Grid>
  );
};

export default App;
