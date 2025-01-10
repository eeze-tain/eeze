import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box, Typography } from '@mui/material';

const CarouselThemeCustomasationPage = ({
  slides,
  settings,
  imgWidth,
}: {
  slides: any;
  settings: any;
  imgWidth?: string | number;
}) => {
  const slideNumbers = (number) => {
    switch (number) {
      case '1':
        return styles.one;
      case '2':
        return styles.two;
      case '3':
        return styles.three;
      // case '4':
      //   return styles.four;
    }
  };

  return (
    <Box
      sx={{
        color: '#FFFFFF',
        fontWeight: '100',
        overflow: 'hidden',
      }}
    >
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <div className="slide-overlay">
              <div style={{ display: 'inline-flex' }}>
                <div className="slide-number" style={styles.slideNumber}></div>
                <span style={slideNumbers(slide.number)}>
                  <Typography
                    sx={{
                      fontSize: '1.75rem',
                      marginTop: '0px',
                      marginLeft: '7px',
                    }}
                  >
                    {slide.number}
                  </Typography>
                </span>
                <div className="slide-title" style={styles.slideTitle}>
                  <Typography
                    sx={{
                      fontSize: '2rem',
                      // fontWeight: 800,
                      marginBottom: '1rem',
                    }}
                  >
                    {slide.title}
                  </Typography>
                </div>
              </div>
            </div>
            <img
              src={slide.image}
              alt={slide.title}
              style={{ transform: `scale(${imgWidth})` }}
              className="slide-image"
            />
          </div>
        ))}
      </Slider>
    </Box>
  );
};

const styles = {
  slideNumber: {
    fontSize: '1.25rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    color: '#FFF',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '100%',
    background: 'linear-gradient(90deg, #2979FF, #00C853)',
    mask: 'linear-gradient(#fffF 0 0) content-box, linear-gradient(#fff 0 0)',
    maskComposite: 'exclude',
    padding: '3px',
    width: '40px',
    height: '40px',
  },
  one: {
    color: 'white',
    fontSize: '2.5rem',
    marginLeft: '-2.3rem',
    marginTop: '2px',
  },
  two: {
    color: 'white',
    fontSize: '2.5rem',
    marginLeft: '-2.4rem',
    marginTop: '2px',
  },
  three: {
    color: 'white',
    fontSize: '2.25rem',
    marginLeft: '-2.28rem',
    marginTop: '1.75px',
  },
  four: {
    color: 'white',
    fontSize: '2.35rem',
    marginLeft: '-2.35rem',
    marginTop: '2px',
  },
  slideTitle: {
    color: '#FFF',
    fontSize: '32px',
    fontStyle: 'normal',
    lineHeight: '100%',
    marginLeft: '2rem',
    marginTop: '.5rem',
  },
};

export default CarouselThemeCustomasationPage;
