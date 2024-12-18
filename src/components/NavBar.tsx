import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <Box
      sx={{
        minHeight: '96.5vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '1rem',
        gap: '0rem',
        background: 'linear-gradient(180deg, #34175D 0%, #2A1545 100%)',
        boxShadow: '20px 0px 40px 0px rgba(34, 5, 60, 0.25)',
        backdropFilter: 'blur(5.896214485168457px)',
        zIndex: 100,
        position: 'sticky', // Sticky Navbar
        top: 0,
        '@media screen and (min-width: 2560px)': {
          minHeight: '95.5vh',
          padding: '2rem', // Larger padding for high-res screens
          gap: '1rem',
        },
        '@media screen and (min-width: 5120px)': {
          minHeight: '98vh',
          padding: '2rem', // Larger padding for high-res screens
          gap: '0rem',
        },
      }}
    >
      {/* Logo */}
      <Box
        component="img"
        src="/eeze/svg/logo.svg"
        alt="Logo"
        sx={{
          width: '200px',
          padding: '1rem',
          '@media screen and (min-width: 2560px)': {
            margin: '3rem 2rem 8rem 3rem',
            padding: '1rem',
            width: '300px', // Scale logo for large screens
          },
          '@media screen and (min-width: 3200px)': {
            margin: '3rem 2rem 8rem 3rem',
            padding: '1rem',
            width: '350px', // Scale logo for large screens
          },
        }}
      />

      {/* Navigation Buttons */}
      {[
        { label: 'Overview', path: '/eeze', icon: '/eeze/svg/desktop.svg' },
        { label: 'Tournaments', path: '/tournaments', icon: '/eeze/svg/jump.svg' },
        { label: 'Theme Customisation', path: '/themes', icon: '/eeze/svg/remind.svg' },
        { label: 'Dynamic Rewards', path: '/rewards', icon: '/eeze/svg/cog.svg' },
        { label: 'Exclusive Tournaments', path: '/exclusive', icon: '/eeze/svg/vip.svg' },
        { label: 'Free Chips', path: '/freechips', icon: '/eeze/svg/gift.svg' },
        { label: 'Roadmap 2025', path: '/roadmap', icon: '/eeze/svg/earth.svg' },
      ].map((item) => {
        const isActive = location.pathname === item.path; // Check if the current path matches the button's path

        return (
          <Button
            key={item.label}
            component={Link}
            to={item.path}
            startIcon={
              <Box
                component="img"
                src={item.icon}
                alt={`${item.label} Icon`}
                sx={{
                  width: '25px',
                  '@media screen and (min-width: 2560px)': {
                    width: '45px', // Scale icon for large screens
                  },
                  '@media screen and (min-width: 3200px)': {
                    width: '50px', // Scale icon for large screens
                  },
                }}
              />
            }
            sx={{
              color: isActive ? '#FFFFFF' : '#CCCCCC',
              textTransform: 'none',
              fontFamily: 'Inter',
              fontSize: '24px',
              fontStyle: 'normal',
              fontWeight: 700,
              textAlign: 'center',
              lineHeight: 'normal',
              justifyContent: 'flex-start',
              width: '100%',
              margin: '1rem 1rem 1rem 1rem',
              padding: '1rem 1rem',
              borderRadius: '50px',
              border: isActive ? '2px solid #FFF' : '2px solid transparent',
              backgroundColor: isActive ? '#4A2289' : '#4A2289',
              '&:hover': {
                color: '#FFFFFF',
                border: '2px solid #FFF',
              },
              '@media screen and (min-width: 2560px)': {
                border: isActive ? '2px solid #FFF' : '2px solid transparent',
                padding: '.75rem 1.5rem', // Larger padding
              },
              '@media screen and (min-width: 3199px)': {
                border: isActive ? '2px solid #FFF' : '2px solid transparent',
                padding: '1rem 2rem', // Larger padding
              },
            }}
          >
            <Typography
              sx={{
                '@media screen and (min-width: 2560px)': {
                  fontSize: '1.3rem', // Scale up text
                  padding: '0.5rem 1rem', // Larger padding
                },
                '@media screen and (min-width: 3199px)': {
                  fontSize: '1.65rem', // Scale up text
                  padding: '1rem 2rem', // Larger padding
                },
              }}
            >
              {item.label}
            </Typography>
          </Button>
        );
      })}

      {/* Call to Action Button */}
      <Button
        sx={{
          marginTop: 'auto',
          background:
            'linear-gradient(88deg, rgba(29, 98, 217, 0.60) 11.29%, rgba(26, 154, 232, 0.60) 45.38%, rgba(31, 167, 212, 0.60) 50.95%, rgba(37, 185, 184, 0.60) 60.28%, rgba(43, 199, 162, 0.60) 70.38%, rgba(46, 208, 147, 0.60) 81.47%, rgba(48, 214, 138, 0.60) 94.33%, rgba(49, 216, 135, 0.60) 113.04%)',
          color: '#FFFFFF',
          borderRadius: '25px',
          width: '100%',
          padding: '12px 16px',
          textTransform: 'none',
          fontWeight: 'bold',
          '&:hover': {
            backgroundColor: '#2E9D9E',
          },
          '@media screen and (min-width: 2560px)': {
            marginTop: '4rem',
            fontSize: '1.65rem', // Scale up text
            padding: '1rem 2rem', // Larger padding
          },
          '@media screen and (min-width: 3200px)': {
            marginTop: '4rem',
            fontSize: '1.65rem', // Scale up text
            padding: '1.5rem 2rem', // Larger padding
          },
        }}
      >
        Book A Call
      </Button>
    </Box>
  );
};

export default Navbar;