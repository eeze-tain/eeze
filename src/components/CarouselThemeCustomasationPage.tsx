import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box } from '@mui/material';
import CustomSlider from './CustomSlider/CustomSlider';

const CarouselThemeCustomasationPage = ({
  slides,
}: {
  slides: any;
}) => {
  return (
    <Box
      sx={{
        color: '#FFFFFF',
        fontWeight: '100',
        overflow: 'hidden',
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center'
      }}
    >
      <CustomSlider>
        {slides.map((slide, index) => {
          return (
            <img
              key={index}
              src={slide.image}
              style={{
                width: '383px',
                height: '675px',
              }}
            />
          );
        })}
      </CustomSlider>
    </Box>
  );
};

export default CarouselThemeCustomasationPage;
