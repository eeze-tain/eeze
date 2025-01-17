import { Box } from '@mui/material';

import { customLogoBg, dotSvgSmall } from '../asset';
import eezeIcon from '../asset/logo-circle.svg';


interface LogoPreviewProps {
  logoUrl?: string;
  bgColor?: string;
}

const LogoPreview = ({ logoUrl, bgColor = '#12122A' }: LogoPreviewProps) => {
  if (!logoUrl) return <img src={eezeIcon} alt="eeze icon" width="42" height="42" />;

  return (
    <Box
      sx={{
        position: 'relative',
        width: '40px',
        height: '40px',
        backgroundImage: `url(${customLogoBg(bgColor)})`,
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        overflow: 'hidden',
      }}
    >
      <Box position="relative">
        <Box
          sx={{
            position: 'absolute',
            top: '-5px',
            right: '6px',
          }}
        >
          {dotSvgSmall}
        </Box>
      </Box>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '90%',
          height: '100%',
          objectFit: 'contain',
        }}
      >
        <Box
          component="img"
          loading="lazy"
          src={logoUrl}
          width="42px"
          height="42px"
          alt="logo icon"
          style={{ objectFit: 'contain' }}
        />
      </Box>
    </Box>
  );
};

export default LogoPreview;
