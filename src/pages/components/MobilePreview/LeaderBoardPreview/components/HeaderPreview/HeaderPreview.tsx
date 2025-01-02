import { useFormContext } from 'react-hook-form';

import { Box, Typography, IconButton } from '@mui/material';

import { logoSVG, historySVG, cancelSVG } from '../../../asset';

const HeaderPreview = () => {
  // const { watch } = useFormContext();
  // const formData = watch('data');

  // ACTIVE COLOR VALUE
  // const fontColor = formData?.main?.fontColor || 'white';
  // const iconColor = formData?.main?.iconsColor || 'white';
  // const logoUrl = formData?.logo?.url;
  const fontColor = 'white';
  const iconColor = 'white';
  const logoUrl = 'url';

  return (
    <Box display='flex' flexDirection='column' alignItems='center' marginBottom='20px'>
      <Box width='32px' height='4px' bgcolor='rgba(255, 255, 255, 0.4)' borderRadius='16px' />
      <Box width='100%' display='flex' justifyContent='space-between' alignItems='center'>
        <Box display='flex' justifyContent='center' alignItems='center'>
          {!logoUrl ? (
            logoSVG(iconColor)
          ) : (
            <Box
              component='img'
              loading='lazy'
              src={logoUrl}
              width='22px'
              height='22px'
              alt='logo icon'
              style={{ objectFit: 'contain', marginRight: '5px', marginLeft: '15px' }}
            />
          )}
          <Typography variant='h6' fontWeight='700' fontFamily='Inter' color={fontColor}>
            TOURNAMENTS
          </Typography>
        </Box>

        <Box display='flex' justifyContent='center' alignItems='center' marginRight='20px'>
          <IconButton>{historySVG(iconColor)}</IconButton>
          <IconButton>{cancelSVG(iconColor)}</IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderPreview;
