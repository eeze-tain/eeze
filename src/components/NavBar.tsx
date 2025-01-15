import { Box, Button, Typography } from '@mui/material';
import React, { useState } from 'react';
import { PopupModal } from 'react-calendly';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const location = useLocation();
  const [openCalendly, setOpenCalendly] = useState<boolean>(false);
  const handleOpenCalendly = () => setOpenCalendly((prev) => !prev);

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
          margin: '3.5rem 0rem 1.75rem 0rem',
          padding: '1rem',
          width: '372.32px',
          '@media screen and (min-width: 3200px)': {
            margin: '6.5rem 0rem 8rem 4rem',
            padding: '1rem',
            // width: '650px', // Scale logo for large screens
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
        { label: 'Free Chips', path: '/freechips', icon: '/svg/earth.svg' },
        { label: 'Roadmap 2025', path: '/roadmap', icon: '/svg/roadmap.svg' },
      ].map((item) => {
        const isActive = location.pathname === item.path; // Check if the current path matches the button's path

        return (
          <Button
            key={item.label}
            component={Link}
            to={item.path}
            sx={{
              color: '#FFFFFF',
              textTransform: 'none',
              fontStyle: 'normal',
              textAlign: 'center',
              lineHeight: 'normal',
              justifyContent: 'center',
              width: '372.32px',
              height: '92px',
              margin: '1.2rem 3rem 1.2rem 3rem',
              // padding: '1.2rem 1rem',
              borderRadius: '16px',
              border: isActive
                ? '2px solid #D3B1FF !important'
                : '2px solid transparent',
              backgroundColor: '#4A2289',
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
                  width: '34px',
                  height: '34px',
                }}
              />
            }
          >
            <Typography
              component="span"
              style={{
                fontFamily: 'Raleway, serif',
                fontWeight: isActive ? 500 : 400,
                fontSize: '24px',
              }}
              // sx={{
              //   fontSize: '1.1rem',
              //   '@media screen and (min-width: 2520px)': {
              //     fontSize: '1.3rem', // Scale up text
              //     padding: '0.5rem 1rem', // Larger padding
              //   },
              //   '@media screen and (min-width: 3200px)': {
              //     fontSize: '2.5rem', // Scale up text
              //     padding: '0rem 2rem', // Larger padding
              //   },
              // }}
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
          background: '#30A977',
          color: '#FFFFFF',
          borderRadius: '16px',
          width: '372.32px',
          height: '92px',
          fontFamily: 'Raleway, serif',
          fontWeight: 700,
          fontSize: '24px',
          padding: '1.2rem 1rem',
          marginTop: '1.25rem',
          textTransform: 'none',
          '&:hover': {
            backgroundColor: '#2E9D9E',
          },
        }}
      >
        <Typography
          sx={{
            fontSize: '1.25rem',
            fontFamily: 'Raleway, serif',
            fontWeight: 700,
          }}
        >
          BOOK A CALL
        </Typography>
      </Button>
      <PopupModal
        url="https://calendly.com/gamification_calendar-eeze/one-on-one"
        rootElement={document.getElementById('root')}
        open={openCalendly}
        onModalClose={handleOpenCalendly}
        pageSettings={{
          backgroundColor: 'ffffff',
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          hideGdprBanner: false,
          primaryColor: '00a2ff',
          textColor: '#1A1A1A',
        }}
      />
    </Box>
  );
};

export default Navbar;
