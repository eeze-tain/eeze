import React from 'react';

interface LinearGradientProps {
  width?: string | number; // Explicitly define the prop type
  height?: string | number
  marginBottom?: string | number;
}

const LinearGradient: React.FC<LinearGradientProps> = ({ width, height, marginBottom }) => {
  return (
    <div
      style={{
        width: width,
        height: height, 
        background: 'linear-gradient(90deg, #2979FF, #00C853)', // Blue to green gradient
        borderRadius: '2px',
        marginBottom: marginBottom
      }}
    ></div>
  );
};

export default LinearGradient;