import { useFormContext } from 'react-hook-form';

import { Box } from '@mui/material';

import { dotSvgSmall, customLogoBg } from '../asset';
import eezeIcon from '../asset/eezeIcon.svg';


interface LogoPreviewProps {
  logoUrl?: string;
}

const LogoPreview = ({ logoUrl }: LogoPreviewProps) => {
  // const { watch } = useFormContext();
  // const formData = watch('data.logo');

  // const bgColor = formData?.backgroundColor || '#12122A';
  // const logoUrl = formData?.url;

  // ACTIVE COLOR VALUE
  const bgColor = '#12122A';

  if (!logoUrl) return <img src={eezeIcon} alt="eeze icon" />;

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
          width="22px"
          height="22px"
          alt="logo icon"
          style={{ objectFit: 'contain' }}
        />
      </Box>
    </Box>
  );
};

export default LogoPreview;
