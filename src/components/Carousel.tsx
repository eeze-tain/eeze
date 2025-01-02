import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Box } from '@mui/material';

const Carousel = ({
    slides,
    settings
}: {
    slides: any,
    settings: any
}) => {

  return (
    <Box
      sx={{
        color: '#FFFFFF',
        fontFamily: 'Inter',
        overflow: 'hidden',
      }}
    >
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="slide">
            <div className="slide-overlay">
              <div style={{ display: 'inline-flex' }}>
                <div className="slide-number" style={styles.slideNumber}></div>
                <span style={styles.number}>{slide.number}</span>
                <div className="slide-title" style={styles.slideTitle}>
                  {slide.title}
                </div>
              </div>
            </div>
            <img src={slide.image} alt={slide.title} className="slide-image" />
          </div>
        ))}
      </Slider>
    </Box>
  );
};

const styles = {
  slideNumber: {
    fontSize: '1.5rem',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '10px',
    color: '#FFF',
    fontFamily: 'Inter',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '100%',
    background: 'linear-gradient(90deg, #2979FF, #00C853)',
    mask: 'linear-gradient(#fffF 0 0) content-box, linear-gradient(#fff 0 0)',
    maskComposite: 'exclude',
    padding: '2px',
    width: '50px',
    height: '50px',
  },
  number: {
    color: 'white',
    fontFamily: 'Raleway',
    fontSize: '2.5rem',
    marginLeft: '-2.1rem',
    marginTop: '0px',
  },
  slideTitle: {
    color: '#FFF',
    fontFamily: 'Raleway',
    fontSize: '32px',
    fontStyle: 'normal',
    fontWeight: 700,
    lineHeight: '100%',
    marginLeft: '2rem',
    marginTop: '1rem',
  },
};

export default Carousel;
