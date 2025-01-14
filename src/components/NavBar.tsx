import React, { useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import { PopupModal } from "react-calendly";

const Navbar: React.FC = () => {
  const location = useLocation();
  const [openCalendly, setOpenCalendly] = useState<boolean>(false);
  const handleOpenCalendly = () => setOpenCalendly((prev)=> !prev);
 
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '0rem 2rem',
        gap: '0rem',
        background: 'transparent',
        // background: 'linear-gradient(180deg, #34175D 0%, #2A1545 100%)',
        // boxShadow: '20px 0px 40px 0px rgba(34, 5, 60, 0.25)',
        // backdropFilter: 'blur(5.896214485168457px)',
        zIndex: 100,
        position: 'sticky',
        top: 0,
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
          margin: '2.75rem 0rem 1.75rem 2rem',
          padding: '1rem',
          width: '275px',
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
        {
          label: 'Theme Customisation',
          path: '/themes',
          icon: '/svg/remind.svg',
        },
        { label: 'Dynamic Rewards', path: '/rewards', icon: '/svg/cog.svg' },
        {
          label: 'Exclusive Tournaments',
          path: '/exclusive',
          icon: '/svg/vip.svg',
        },
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
              margin: '1.25rem 3rem 1.25rem 3rem',
              padding: '1.2rem 1rem',
              borderRadius: '20px',
              border: isActive ? '2px solid #FFF' : '2px solid transparent',
              backgroundColor: isActive ? '#4A2289' : '#4A2289',
              '&:hover': {
                color: '#FFFFFF',
                border: '2px solid #FFF',
              },
            }}
            startIcon={
              <Box
                component="img"
                src={item.icon}
                alt={`${item.label} Icon`}
                sx={{
                  width: '25px'
                }}
              />
            }
          >
            <Typography
              sx={{
                fontSize: '1.1rem',
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
        onClick={handleOpenCalendly}
                  // component={Link}
                  // to={'/book'}
        sx={{
          // background:
          //   'linear-gradient(88deg, rgba(29, 98, 217, 0.60) 11.29%, rgba(26, 154, 232, 0.60) 45.38%, rgba(31, 167, 212, 0.60) 50.95%, rgba(37, 185, 184, 0.60) 60.28%, rgba(43, 199, 162, 0.60) 70.38%, rgba(46, 208, 147, 0.60) 81.47%, rgba(48, 214, 138, 0.60) 94.33%, rgba(49, 216, 135, 0.60) 113.04%)',
          background: 'rgba(48, 169, 119, 0.70)',
          color: '#FFFFFF',
          borderRadius: '20px',
          width: '100%',
          fontSize: '30px',
          padding: '1.2rem 1rem',
          marginTop: '1.25rem',
          textTransform: 'none',
          fontWeight: 'normal',
          '&:hover': {
            backgroundColor: '#2E9D9E',
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
            }}
          />
        }
      >
        <Typography
          sx={{
            fontSize: '1.1rem',
          }}
        >
          BOOK A CALL
        </Typography>
      </Button>
      <PopupModal
        url="https://calendly.com/hussainibulama/30min"
        rootElement={document.getElementById("root")}
        open={openCalendly}
        onModalClose={handleOpenCalendly}
        pageSettings={{
          backgroundColor: 'ffffff',
          // hideEventTypeDetails: false,
          // hideLandingPageDetails: false,
          // hideGdprBanner: true,
          primaryColor: '00a2ff',
          textColor: '4d5055',
        }}
      />
    </Box>
  );
};

export default Navbar;
