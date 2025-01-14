import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Grid } from '@mui/material';
import Navbar from './components/NavBar';
import Home from './pages/Home';
import Tournaments from './pages/Tournaments';
import ThemeCustomisation from './pages/ThemeCustomisation';
import DynamicRewards from './pages/DynamicRewards';
import ExclusiveTournament from './pages/ExclusiveTournaments';
import BookNow from './pages/BookNow';

const App: React.FC = () => {
  return (
    <Grid
      container
      sx={{
        height: '100%',
        margin: 0,
        padding: 0,
        backgroundImage: 'url(/images/background.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Navbar is sticky */}
      <Grid
        item
        xs={1.85}
        sx={{ height: '100vh', position: 'sticky', top: 0, zIndex: 100 }}
      >
        <Navbar />
      </Grid>

      {/* Content spans the remaining 10.20 columns and has a background image */}
      <Grid
        item
        xs={10.15}
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
          <Route path="/book" element={<BookNow />} />
        </Routes>
      </Grid>
    </Grid>
  );
};

export default App;
