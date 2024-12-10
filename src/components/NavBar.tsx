import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <Box
      sx={{
        // height: '96.5vh',
        minHeight: '96.5vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1rem',
        gap: '1rem',
        background: 'linear-gradient(180deg, #34175D 0%, #2A1545 100%)',
        boxShadow: '20px 0px 40px 0px rgba(34, 5, 60, 0.25)',
        backdropFilter: 'blur(5.896214485168457px)',
        zIndex: 100, 
        position: 'sticky', // Sticky Navbar
        // top: 0,
      }}
    >
      {/* Logo */}
      <img
        src="/svg/logo.svg"
        alt="Logo"
        style={{ width: '200px', padding: '1rem' }}
      />

      {/* Navigation Buttons */}
      {[
        { label: 'Overview', path: '/', icon: '/svg/desktop.svg' },
        { label: 'Tournaments', path: '/tournaments', icon: '/svg/jump.svg' },
        { label: 'Theme Customisation', path: '/theme', icon: '/svg/remind.svg' },
        { label: 'Dynamic Rewards', path: '/rewards', icon: '/svg/cog.svg' },
        { label: 'Exclusive Tournaments', path: '/exclusive', icon: '/svg/vip.svg' },
        { label: 'Free Chips', path: '/freechips', icon: '/svg/gift.svg' },
        { label: 'Roadmap 2025', path: '/roadmap', icon: '/svg/earth.svg' },
      ].map((item) => (
        <Button
          key={item.label}
          component={Link}
          to={item.path}
          startIcon={<img width={'25px'} src={item.icon} />}
          sx={{
            color: '#CCCCCC',
            textTransform: 'none',
            fontFamily: 'Inter',
            fontSize: '24px',
            fontStyle: 'normal',
            fontWeight: 700,
            textAlign: 'center',
            lineHeight: 'normal',
            justifyContent: 'flex-start',
            width: '100%',
            margin: '0px 1rem 1rem 1rem',
            padding: '1rem 1rem',
            borderRadius: '50px',
            border: '2px solid transparent',
            backgroundColor: '#4A2289',
            '&:hover': {
                color: '#FFFFFF',
                border: '2px solid #FFF',
            },
          }}
        >
          <Typography>{item.label}</Typography>
        </Button>
      ))}

      {/* Call to Action Button */}
      <Button
        sx={{
          marginTop: 'auto', // Push the button to the bottom
          background: 'linear-gradient(88deg, rgba(29, 98, 217, 0.60) 11.29%, rgba(26, 154, 232, 0.60) 45.38%, rgba(31, 167, 212, 0.60) 50.95%, rgba(37, 185, 184, 0.60) 60.28%, rgba(43, 199, 162, 0.60) 70.38%, rgba(46, 208, 147, 0.60) 81.47%, rgba(48, 214, 138, 0.60) 94.33%, rgba(49, 216, 135, 0.60) 113.04%)',
          color: '#FFFFFF',
          borderRadius: '20px',
          width: '100%',
          padding: '12px 16px',
          textTransform: 'none',
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: '#2E9D9E',
          },
        }}
      >
        Book A Call
      </Button>
    </Box>
  );
};

export default Navbar;