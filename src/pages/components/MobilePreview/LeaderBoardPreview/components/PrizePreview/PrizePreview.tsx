import { useFormContext } from 'react-hook-form';

import { Box, Typography } from '@mui/material';

import { starSvg, positionCircleSvg } from '../../../asset';
import Trophy1 from '../../../asset/trophy.png';
import Trophy2 from '../../../asset/trophy2.png';
import Trophy3 from '../../../asset/trophy3.png';

const getCandleStyles = (index) => {
  const heights = ['40px', '60px', '37px'];
  return {
    height: heights[index] || '37px',
    background:
      'linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0.00) 100%)'
  };
};
const trophyImages = [Trophy1, Trophy2, Trophy3];
const strokeColors = ['#DDE5E4', '#F2B034', '#B57252'];

const commonTypographyStyles = {
  fontFamily: 'Inter',
  lineHeight: '16px'
};

const commonTrophyStyles = {
  position: 'relative',
  width: '36px',
  height: '60px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center'
};
const data = [
  { amount: '€1000', name: 'player_DC6GD9fJ', score: 5996, position: 2 },
  { amount: '€1500', name: 'player_DC6GD9fJ', score: 5998, position: 1 },
  { amount: '€500', name: 'player_DC6GD9fJ', score: 5986, position: 3 }
];
const PrizePreview = () => {
  // const { watch } = useFormContext();
  // const formData = watch('data.main');

  // ACTIVE COLOR VALUE
  // const fontColor = formData?.fontColor || 'white';
  // const iconColor = formData?.iconsColor || 'white';

  const fontColor = 'white';
  const iconColor = 'white';

  return (
    <Box display='flex' alignItems='flex-end' justifyContent='center'>
      {data.map(({ amount, name, score, position }, index) => (
        <Box
          key={index}
          display='flex'
          alignItems='center'
          justifyContent='flex-end'
          flexDirection='column'
          mx={1} // Spacing between items
        >
          {/* Amount */}
          <Typography
            sx={{
              ...commonTypographyStyles,
              color: strokeColors[index],
              fontSize: '12px',
              fontWeight: 500,
              textAlign: 'center'
            }}>
            {amount}
          </Typography>

          {/* Trophy and Position Layout */}
          <Box
            display='flex'
            flexDirection='column'
            alignItems='center'
            position='relative'
            sx={{ marginBottom: '20px' }}>
            {/* Trophy Image with Circular Shadow */}
            <Box sx={{ ...commonTrophyStyles }}>
              {/* Circular Shadow */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '10px',
                  width: '57.077px',
                  height: '57.077px',
                  background: 'rgba(255, 255, 255, 0.10)',
                  borderRadius: '28.5387px'
                }}
              />
              {/* Trophy Image */}
              <img
                src={trophyImages[index]}
                alt={`trophy-${index}`}
                style={{
                  width: '36px',
                  height: '60px',
                  position: 'relative', // Place it above the shadow
                  zIndex: 1 // Ensure it is above the shadow
                }}
              />
            </Box>

            {/* Position Number */}
            <Box
              display='flex'
              alignItems='center'
              justifyContent='center'
              mt={1}
              style={{ position: 'absolute', bottom: '-16px', zIndex: 1 }}>
              {positionCircleSvg(position, fontColor, strokeColors[index])}
            </Box>
          </Box>

          {/* Player Name */}
          <Typography
            sx={{
              ...commonTypographyStyles,
              color: fontColor,
              fontSize: '10px',
              fontWeight: 400,
              textAlign: 'center'
            }}>
            {name}
          </Typography>

          {/* Score */}
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '0px' }}>
            {starSvg(iconColor)}
            <Typography
              sx={{
                ...commonTypographyStyles,
                color: fontColor,
                fontSize: '12px',
                fontWeight: 500
              }}>
              {score}
            </Typography>
          </Box>

          {/* Candle-like Background */}
          <Box
            sx={{
              width: '32px',
              flexShrink: 0,
              ...getCandleStyles(index) // Apply candle styles based on index
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default PrizePreview;
