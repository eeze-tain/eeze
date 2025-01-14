import { Box, Typography, IconButton } from '@mui/material';
import { historySVG, cancelSVG } from '../../../asset';
import eezeIcon from '../../../asset/eezeIcon.svg';
const HeaderPreview = ({
  primaryColor,
  fontColor = 'white',
  iconColor = 'white',
  logoUrl = '',
}) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      alignItems="center"
      marginBottom="20px"
    >
      {/* Header Bar */}
      <Box
        width="32px"
        height="4px"
        bgcolor={primaryColor}
        borderRadius="16px"
      />

      {/* Header Content */}
      <Box
        width="100%"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        {/* Logo and Title */}
        <Box display="flex" justifyContent="center" alignItems="center">
          {!logoUrl ? (
            // logoSVG(iconColor)
            <img src={eezeIcon} alt="eeze icon" />
          ) : (
            <Box
              component="img"
              loading="lazy"
              src={logoUrl}
              width="42px"
              height="42px"
              alt="logo icon"
              style={{
                objectFit: 'contain',
                marginRight: '5px',
                marginLeft: '15px',
              }}
            />
          )}
          <Typography
            marginLeft="10px"
            variant="h6"
            fontWeight="700"
            fontFamily="Inter"
            color={fontColor}
          >
            TOURNAMENTS
          </Typography>
        </Box>
        {/* Icons */}
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          marginRight="20px"
        >
          <IconButton>{historySVG(iconColor)}</IconButton>
          <IconButton>{cancelSVG(iconColor)}</IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default HeaderPreview;
