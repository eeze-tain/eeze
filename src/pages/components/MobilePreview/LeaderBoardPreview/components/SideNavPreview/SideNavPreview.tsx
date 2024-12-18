import { useFormContext } from 'react-hook-form';

import { Box, Button, IconButton } from '@mui/material';

import { iconLedaderboard, iconTables, iconHistory } from '../../../asset';

const SideNavPreview = () => {
  // const { watch } = useFormContext();
  // const formData = watch('data.main');
  // const btnTextColor = formData?.ctaTextColor || '#06191F';
  // const btnBackground = formData?.primaryColor || '#C5D831';
  // const iconColor = formData?.iconsColor || 'white';
  // const secondaryColor = formData?.secondaryColor || '#03A6F7';

  // ACTIVE COLOR VALUE
  let btnTextColor = '#06191F';
  let btnBackground = '#C5D831';
  let iconColor = 'white';
  let secondaryColor = '#03A6F7';

  const iconButtonStyles = {
    justifyContent: 'center',
    alignItems: 'center',
    width: '32px',
    height: '32px',
    display: 'flex',
    backgroundColor: 'transparent'
  };
  const joinStyles = {
    'width': '94px',
    'height': '32px',
    'padding': '8px 16px',
    'borderRadius': '12px',
    'backgroundColor': btnBackground,
    'color': btnTextColor,
    'fontFamily': 'Inter',
    'fontSize': '12px',
    'fontWeight': 700,
    'lineHeight': '16px',
    '&:hover': {
      backgroundColor: btnBackground,
      color: btnTextColor
    }
  };

  return (
    <Box
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      padding='0 24px'
      sx={{
        background:
          'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0) 100%)',
        borderTop: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '0px 16px 0px 0px',
        height: '64px'
      }}>
      <Box display='flex' alignItems='center' gap='8px'>
        <Button sx={joinStyles}>Join Now</Button>
      </Box>

      <Box display='flex' alignItems='center' gap='8px'>
        <IconButton
          sx={{
            ...iconButtonStyles,
            borderRadius: '8px',
            backgroundColor: secondaryColor,
            padding: '4px'
          }}>
          {iconLedaderboard(iconColor)}
        </IconButton>

        <IconButton sx={iconButtonStyles}>{iconTables(iconColor)}</IconButton>

        <IconButton sx={iconButtonStyles}>{iconHistory(iconColor)}</IconButton>
      </Box>
    </Box>
  );
};

export default SideNavPreview;
