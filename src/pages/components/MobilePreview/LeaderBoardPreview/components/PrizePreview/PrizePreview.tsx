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

const defaultData = [
  { amount: '€1000', name: 'player_DC6GD9fJ', score: 5996, position: 2 },
  { amount: '€1500', name: 'player_DC6GD9fJ', score: 5998, position: 1 },
  { amount: '€500', name: 'player_DC6GD9fJ', score: 5986, position: 3 }
];

const trophyImages = [Trophy1, Trophy2, Trophy3];
const strokeColors = ['#DDE5E4', '#F2B034', '#B57252'];

const PrizePreview = ({
  fontColor = 'white',
  iconColor = 'white',
  data = defaultData
}: any) => {
  const commonTypographyStyles = {
    fontFamily: 'Inter',
    lineHeight: '16px',
    textAlign: 'center'
  };

  const commonTrophyStyles = {
    position: 'relative',
    width: '36px',
    height: '60px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  };

  return (
    <Box display="flex" alignItems="flex-end" justifyContent="center" flexWrap="wrap">
      {data.map(({ amount, name, score, position }, index) => (
        <Box
          key={index}
          display="flex"
          alignItems="center"
          justifyContent="flex-end"
          flexDirection="column"
          mx={1}
          sx={{ textAlign: 'center' }}
        >
          {/* Amount */}
          <Typography
            sx={{
              ...commonTypographyStyles,
              color: strokeColors[index],
              fontSize: '12px',
              fontWeight: 500
            }}
          >
            {amount}
          </Typography>

          {/* Trophy Section */}
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            position="relative"
            sx={{ marginBottom: '20px' }}
          >
            {/* Circular Shadow */}
            <Box sx={{ ...commonTrophyStyles }}>
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
              <img
                src={trophyImages[index]}
                alt={`Trophy for position ${position}`}
                style={{
                  width: '36px',
                  height: '60px',
                  position: 'relative',
                  zIndex: 1
                }}
              />
            </Box>

            {/* Position */}
            <Box
              display="flex"
              alignItems="center"
              justifyContent="center"
              mt={1}
              style={{ position: 'absolute', bottom: '-16px', zIndex: 1 }}
            >
              {positionCircleSvg(position, fontColor, strokeColors[index])}
            </Box>
          </Box>

          {/* Player Name */}
          <Typography
            sx={{
              ...commonTypographyStyles,
              color: fontColor,
              fontSize: '10px',
              fontWeight: 400
            }}
          >
            {name}
          </Typography>

          {/* Score */}
          <Box display="flex" justifyContent="center" alignItems="center" gap="0px">
            {starSvg(iconColor)}
            <Typography
              sx={{
                ...commonTypographyStyles,
                color: fontColor,
                fontSize: '12px',
                fontWeight: 500
              }}
            >
              {score}
            </Typography>
          </Box>

          {/* Candle Background */}
          <Box
            sx={{
              width: '32px',
              flexShrink: 0,
              ...getCandleStyles(index)
            }}
          />
        </Box>
      ))}
    </Box>
  );
};

export default PrizePreview;