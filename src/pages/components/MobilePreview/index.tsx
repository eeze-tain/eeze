import { BatteryFull, Wifi } from '@mui/icons-material';
import { Box, Grid, useTheme } from '@mui/material';

import CoreUi from './asset/CoreUI.png';

const MobilePreview = ({ primaryColor, secondaryColor, backgroundColor, children }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        padding: '0px',
        borderRadius: '20px',
        border: `1px solid ${theme.palette.mode === 'dark' ? 'black' : 'white'}`
      }}>
      <Box
        sx={{
          width: 'calc(100% - 6px)',
          height: '100%',
          minHeight: '280px',
          borderRadius: '20px',
          border: `3px solid ${theme.palette.mode === 'dark' ? 'white' : 'black'}`,
          backgroundColor: 'white',
          color: 'black',
          boxShadow: '40px 0px 40px rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(5.896214485168457px)',
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          overflow: 'hidden'
        }}>
        <Grid
          container
          style={{
            height: '40px',
            width: '100%',
            // backgroundColor: primaryColor,
            borderTopLeftRadius: '20px',
            borderTopRightRadius: '20px',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            padding: '5px'
          }}>
          <Grid item md={4} style={{ display: 'flex', alignItems: 'center', textAlign: 'left' }}>
            <span
              style={{
                display: 'inline-flex',
                fontSize: '20px',
                fontWeight: '700'
              }}>
              •••••&nbsp;
            </span>
            <Wifi sx={{ width: 16, height: 16 }} />
          </Grid>
          <Grid
            item
            md={4}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <p style={{ margin: 0, fontSize: '12px', fontFamily: 'Inter' }}>9:41 AM</p>
          </Grid>
          <Grid
            item
            md={4}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'flex-end',
              textAlign: 'right'
            }}>
            <p
              style={{
                display: 'inline-flex',
                fontSize: '12px',
                fontFamily: 'Inter'
              }}>
              100%&nbsp;
            </p>
            <BatteryFull sx={{ rotate: '90deg', width: 16, height: 16 }} />
          </Grid>
        </Grid>

        {/* Content */}
        <Box
          sx={{
            paddingTop: '30px',
            backgroundColor: secondaryColor,
            backgroundImage: `url(${CoreUi})`,
            backgroundSize: 'cover',
            backgroundPosition: 'top',
            backgroundRepeat: 'no-repeat',
            flex: 1,
            color: '#000'
          }}>
          {children}
        </Box>
      </Box>
    </Box>
  );
};

export default MobilePreview;
