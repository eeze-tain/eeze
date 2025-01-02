import { useFormContext } from 'react-hook-form';

import { Box, Typography } from '@mui/material';

// Common styles
const containerStyles = (bgColor) => ({
  position: 'relative',
  display: 'flex',
  width: '40px',
  height: '40px',
  flexDirection: 'column',
  justifyContent: 'flex-end',
  alignItems: 'center',
  background: bgColor,
  borderRadius: '0px 4px 4px 0px'
});

const gradientStyles = {
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '4px',
  height: '14px',
  width: '27px',
  overflow: 'hidden',
  background:
    'linear-gradient(93deg, #1D62D9 -30.37%, #1A9AE8 26.72%, #25B9B8 51.66%, #2BC7A2 68.57%, #2ED093 87.14%)'
};

const scoreBoxStyles = (bgColor) => ({
  position: 'relative',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  margin: '0.5px',
  background: bgColor,
  width: '100%',
  height: '95%',
  borderRadius: '4px'
});

const scoreValueStyles = (fontColor) => ({
  color: fontColor,
  textAlign: 'center'
});

const timeBoxStyles = (textColor, bgColor) => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  color: textColor,
  textAlign: 'center',
  fontSize: '8px',
  height: '14px',
  fontWeight: 700,
  width: '100%',
  borderRadius: '0px 0px 4px 0px',
  background: bgColor
});

const scoreTypographyStyles = {
  fontFamily: 'Inter'
};

const WidgetScorePreview = () => {
  // const { watch } = useFormContext();
  // const formData = watch('data.widget');

  // const bgColor = formData?.backgroundColor || '#2d1d48';
  // const fontColor = formData?.textColor || 'white';
  // const secColor = formData?.secondaryTextColor || '#000';
  // const secBgColor =
  //   formData?.secondaryBackgroundColor ||
  //   'linear-gradient(93deg, #1D62D9 -30.37%, #1A9AE8 26.72%, #25B9B8 51.66%, #2BC7A2 68.57%, #2ED093 87.14%)';


  // ACTIVE COLOR VALUE
  const bgColor = '#2d1d48';
  const fontColor = 'white';
  const secColor = '#000';
  const secBgColor =  'linear-gradient(93deg, #1D62D9 -30.37%, #1A9AE8 26.72%, #25B9B8 51.66%, #2BC7A2 68.57%, #2ED093 87.14%)';


  return (
    <Box sx={containerStyles(bgColor)}>
      <Box sx={{ position: 'absolute', top: '-5px' }}>
        <Box sx={gradientStyles}>
          <Box sx={scoreBoxStyles(bgColor)}>
            <Typography
              sx={{
                ...scoreValueStyles(fontColor),
                ...scoreTypographyStyles,
                fontSize: '8px',
                fontWeight: 700
              }}>
              #
            </Typography>
            <Typography
              sx={{
                ...scoreValueStyles(fontColor),
                ...scoreTypographyStyles,
                fontSize: '10px',
                fontWeight: 700
              }}>
              22
            </Typography>
          </Box>
        </Box>
      </Box>

      <Typography
        sx={{
          ...scoreValueStyles(fontColor),
          ...scoreTypographyStyles,
          position: 'relative',
          fontSize: '10px',
          fontWeight: 700,
          top: '-2px'
        }}>
        1269
      </Typography>

      <Box sx={timeBoxStyles(secColor, secBgColor)}>2h 48m</Box>
    </Box>
  );
};

export default WidgetScorePreview;