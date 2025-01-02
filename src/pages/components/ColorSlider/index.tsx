import { useCallback } from 'react';

import { Box, Slider, SliderOwnProps, Typography } from '@mui/material';

import { hslToHex } from '../../../utils/colorsUtils';

/**
 * NOTE: Explore if possible to add format props to allow different formats
 */
interface ColorSliderProps extends Omit<SliderOwnProps, 'onChange'> {
  label?: string;
  onColorChange?: (newColor: string) => void;
  colorsOptions?: {
    saturation?: number;
    lightness?: number;
  };
}
export default function ColorSlider({
  label,
  onColorChange,
  colorsOptions = { saturation: 50, lightness: 50 },
  ...props
}: ColorSliderProps) {
  const handleOnChange = useCallback<NonNullable<SliderOwnProps['onChange']>>(
    (_, newValue) => {
      if (!onColorChange || Array.isArray(newValue)) return;

      const hexValue = hslToHex(newValue, colorsOptions);
      onColorChange(hexValue);
    },
    [onColorChange, colorsOptions]
  );

  return (
    <Box>
      <Typography component={'span'} variant='body2'>
        {label}
      </Typography>
      <Slider
        {...props}
        sx={{
          '& .MuiSlider-track': {
            display: 'none'
          },
          '& .MuiSlider-rail': {
            background: `linear-gradient(to right,
        ${[0, 60, 120, 180, 240, 300, 360]
          .map(
            (hue) =>
              `hsl(${hue}, ${colorsOptions?.saturation ?? 100}%, ${Math.max(colorsOptions?.lightness ?? 50, 40)}%)`
          )
          .join(',\n')}
      )`,
            opacity: 1,
            height: 8,
            borderRadius: 5
          },
          '& .MuiSlider-thumb': {
            'border': '2px solid #6D03F7',
            'backgroundColor': `hsl(${props.value}, ${colorsOptions?.saturation ?? 100}%, ${Math.max(colorsOptions?.lightness ?? 50, 40)}%)`,
            '&:hover': {
              boxShadow: '0'
            }
          }
        }}
        min={0}
        max={360}
        onChange={handleOnChange}
      />
    </Box>
  );
}
