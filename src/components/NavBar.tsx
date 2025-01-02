import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();

  return (
    <Box
      sx={{
        minHeight: '93.5vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '2rem',
        gap: '0rem',
        background: 'linear-gradient(180deg, #34175D 0%, #2A1545 100%)',
        boxShadow: '20px 0px 40px 0px rgba(34, 5, 60, 0.25)',
        backdropFilter: 'blur(5.896214485168457px)',
        zIndex: 100,
        position: 'sticky',
        top: 0,
        // '@media screen and (min-width: 2520px)': {
        //   minHeight: '95.5vh',
        //   padding: '2rem', // Larger padding for high-res screens
        //   gap: '1rem',
        // },
        '@media screen and (min-width: 3200px)': {
          minHeight: '92vh',
          paddingX: '5.5rem',
          gap: '1rem',
        },
      }}
    >
      {/* Logo */}
      <Box
        component="img"
        src="/svg/logo.svg"
        alt="Logo"
        sx={{
          margin: '1.75rem 0rem 1.75rem 2rem',
          padding: '1rem',
          width: '250px',
          // '@media screen and (min-width: 2520px)': {
          //   margin: '3rem 2rem 8rem 3rem',
          //   padding: '1rem',
          //   width: '300px', // Scale logo for large screens
          // },
          '@media screen and (min-width: 3200px)': {
            margin: '6.5rem 0rem 8rem 4rem',
            padding: '1rem',
            width: '650px', // Scale logo for large screens
          },
        }}
      />

      {/* Navigation Buttons */}
      {[
        { label: 'Overview', path: '/', icon: '/svg/desktop.svg' },
        { label: 'Tournaments', path: '/tournaments', icon: '/svg/jump.svg' },
        { label: 'Theme Customisation', path: '/themes', icon: '/svg/remind.svg' },
        { label: 'Dynamic Rewards', path: '/rewards', icon: '/svg/cog.svg' },
        { label: 'Exclusive Tournaments', path: '/exclusive', icon: '/svg/vip.svg' },
        { label: 'Free Chips', path: '/freechips', icon: '/svg/gift.svg' },
        { label: 'Roadmap 2025', path: '/roadmap', icon: '/svg/earth.svg' },
      ].map((item) => {
        const isActive = location.pathname === item.path; // Check if the current path matches the button's path

        return (
          <Button
            key={item.label}
            component={Link}
            to={item.path}
            sx={{
              color: isActive ? '#FFFFFF' : '#CCCCCC',
              textTransform: 'none',
              fontFamily: 'Inter',
              fontSize: '30px',
              fontStyle: 'normal',
              fontWeight: 700,
              textAlign: 'center',
              lineHeight: 'normal',
              justifyContent: 'center',
              width: '100%',
              margin: '1rem 3rem 1rem 3rem',
              padding: '1rem 1rem',
              borderRadius: '20px',
              border: isActive ? '2px solid #FFF' : '2px solid transparent',
              backgroundColor: isActive ? '#4A2289' : '#4A2289',
              '&:hover': {
                color: '#FFFFFF',
                border: '2px solid #FFF',
              },
              '@media screen and (min-width: 2520px)': {
                border: isActive ? '2px solid #FFF' : '2px solid transparent',
                padding: '.75rem 1.5rem', // Larger padding
              },
              '@media screen and (min-width: 3200px)': {
                border: isActive ? '2px solid #FFF' : '2px solid transparent',
                margin: '1rem 3rem 4rem 3rem',
                padding: '3.25rem', // Larger padding
              },
            }}
            startIcon={
              <Box
                component="img"
                src={item.icon}
                alt={`${item.label} Icon`}
                sx={{
                  width: '25px',
                  // '@media screen and (min-width: 2520px)': {
                  //   width: '45px', // Scale icon for large screens
                  // },
                  '@media screen and (min-width: 3200px)': {
                    minWidth: '3.5rem', // Scale icon for large screens
                    
                  },
                }}
              />
            }
          >
            <Typography
              sx={{
                '@media screen and (min-width: 2520px)': {
                  fontSize: '1.3rem', // Scale up text
                  padding: '0.5rem 1rem', // Larger padding
                },
                '@media screen and (min-width: 3200px)': {
                  fontSize: '2.5rem', // Scale up text
                  padding: '0rem 2rem', // Larger padding
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
          background:
            'linear-gradient(88deg, rgba(29, 98, 217, 0.60) 11.29%, rgba(26, 154, 232, 0.60) 45.38%, rgba(31, 167, 212, 0.60) 50.95%, rgba(37, 185, 184, 0.60) 60.28%, rgba(43, 199, 162, 0.60) 70.38%, rgba(46, 208, 147, 0.60) 81.47%, rgba(48, 214, 138, 0.60) 94.33%, rgba(49, 216, 135, 0.60) 113.04%)',
          color: '#FFFFFF',
          borderRadius: '20px',
          width: '100%',
          fontSize: '30px',
          padding: '1rem 1rem',
          marginTop: '1rem',
          textTransform: 'none',
          fontWeight: 'normal',
          // fontSize: '1.65rem', // Scale up text
          '&:hover': {
            backgroundColor: '#2E9D9E',
          },
          // '@media screen and (min-width: 2520px)': {
          //   marginTop: '4rem',
          //   fontSize: '1.65rem', // Scale up text
          //   padding: '1rem 2rem', // Larger padding
          // },
          '@media screen and (min-width: 3200px)': {
            marginTop: '4rem',
            // fontSize: '1.65rem', // Scale up text
            padding: '3.5rem', // Larger padding
            fontSize: '2.5rem', // Scale up text
            // padding: '0rem 2rem', // Larger padding
          },
        }}
        startIcon={
          <Box
            component="img"
            src={'/svg/phone.svg'}
            alt={`Phone Icon`}
            sx={{
              width: '25px',
              minWidth: '25px',
              // '@media screen and (min-width: 2520px)': {
              //   width: '45px', // Scale icon for large screens
              // },
              '@media screen and (min-width: 3200px)': {
                minWidth: '3.5rem', // Scale icon for large screens
              },
            }}
          />
        }
      >
                    <Typography
              sx={{
                '@media screen and (min-width: 3200px)': {
                  fontSize: '2.5rem', // Scale up text
                },
              }}
            >
                     BOOK A CALL
            </Typography>
      </Button>
    </Box>
  );
};

export default Navbar;