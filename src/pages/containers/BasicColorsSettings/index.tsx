import React from 'react';
import { hexToHue } from '../../../utils/colorsUtils';
import ColorSlider from '../../components/ColorSlider';

type BasicColorsSettingsProps = {
  mainThemeColor: string;
  secondaryThemeColor: string;
  CTATextColor: string;
  setColors: (updates: { [key: string]: string }) => void;
};

export default function BasicColorsSettings({
  mainThemeColor,
  secondaryThemeColor,
  CTATextColor,
  setColors
}: BasicColorsSettingsProps) {
  const handleOnColorChange = (keys: string[]) => (newColor: string) => {
    const updates: { [key: string]: string } = {};
    keys.forEach((key) => {
      updates[key] = newColor;
    });
    setColors(updates);
  };

  return (
    <>
      <ColorSlider
        label="Main Theme color"
        value={hexToHue(mainThemeColor)}
        onColorChange={handleOnColorChange([
          'data.main.backgroundColor',
          'data.widget.backgroundColor',
          'data.logo.backgroundColor'
        ])}
        colorsOptions={{ saturation: 43, lightness: 20 }}
      />
      <ColorSlider
        label="Secondary color"
        value={hexToHue(secondaryThemeColor)}
        onColorChange={handleOnColorChange([
          'data.main.secondaryColor',
          'data.widget.secondaryBackgroundColor'
        ])}
        colorsOptions={{ saturation: 98, lightness: 49 }}
      />
      <ColorSlider
        label="CTA color"
        value={hexToHue(CTATextColor)}
        onColorChange={handleOnColorChange(['data.main.primaryColor'])}
        colorsOptions={{ saturation: 68, lightness: 52 }}
      />
    </>
  );
}
