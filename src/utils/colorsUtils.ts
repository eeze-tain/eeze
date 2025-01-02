// Function to lighten a color by a percentage
export const lightenColor = (hex: string, percent: number) => {
    const num = parseInt(hex.replace('#', ''), 16);
  
    // Extract RGB values
    let r = (num >> 16) + Math.round((255 - (num >> 16)) * (percent / 100));
    let g = ((num >> 8) & 0x00ff) + Math.round((255 - ((num >> 8) & 0x00ff)) * (percent / 100));
    let b = (num & 0x0000ff) + Math.round((255 - (num & 0x0000ff)) * (percent / 100));
  
    // Ensure RGB values stay within 0-255 range
    r = Math.min(255, r);
    g = Math.min(255, g);
    b = Math.min(255, b);
  
    // Convert back to hex and return
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1)}`;
  };
  
  // Function to calculate brightness of a color
  export const getTextColor = (hex: string) => {
    const num = parseInt(hex.replace('#', ''), 16);
    const r = (num >> 16) & 255;
    const g = (num >> 8) & 255;
    const b = num & 255;
  
    // Calculate the luminance of the color
    const luminance = 0.299 * r + 0.587 * g + 0.114 * b;
  
    // Return black if it's a light color, white if it's dark
    return luminance > 186 ? '#000' : '#FFF';
  };
  
  // Utility function to convert hex to HSL and extract the hue
  export function hexToHue(hex?: string): number {
    let r = 0,
      g = 0,
      b = 0;
    if (hex?.length === 7) {
      r = parseInt(hex.slice(1, 3), 16);
      g = parseInt(hex.slice(3, 5), 16);
      b = parseInt(hex.slice(5, 7), 16);
    }
    const max = Math.max(r, g, b);
    const min = Math.min(r, g, b);
    let hue = 0;
  
    if (max === min) {
      hue = 0; // achromatic (gray)
    } else {
      const d = max - min;
      switch (max) {
        case r:
          hue = ((g - b) / d + (g < b ? 6 : 0)) * 60;
          break;
        case g:
          hue = ((b - r) / d + 2) * 60;
          break;
        case b:
          hue = ((r - g) / d + 4) * 60;
          break;
      }
    }
  
    return Math.round(hue);
  }
  
  // Utility function to convert hue to hex
  export function hslToHex(
    hue: number,
    { saturation = 50, lightness = 50 }: { saturation?: number; lightness?: number } = {}
  ): string {
    const s = saturation;
    const l = lightness;
    const c = (1 - Math.abs((2 * l) / 100 - 1)) * (s / 100);
    const x = c * (1 - Math.abs(((hue / 60) % 2) - 1));
    const m = l / 100 - c / 2;
    let r = 0,
      g = 0,
      b = 0;
  
    if (hue >= 0 && hue < 60) {
      r = c;
      g = x;
      b = 0;
    } else if (hue >= 60 && hue < 120) {
      r = x;
      g = c;
      b = 0;
    } else if (hue >= 120 && hue < 180) {
      r = 0;
      g = c;
      b = x;
    } else if (hue >= 180 && hue < 240) {
      r = 0;
      g = x;
      b = c;
    } else if (hue >= 240 && hue < 300) {
      r = x;
      g = 0;
      b = c;
    } else if (hue >= 300 && hue < 360) {
      r = c;
      g = 0;
      b = x;
    }
  
    const toHex = (v: number) =>
      Math.round((v + m) * 255)
        .toString(16)
        .padStart(2, '0');
    return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
  }
  
  export function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);
    return {
      r: (bigint >> 16) & 255,
      g: (bigint >> 8) & 255,
      b: bigint & 255
    };
  }
  
  // Convert RGB to hex
  export function rgbToHex(r, g, b) {
    return `#${((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1).toUpperCase()}`;
  }
  
  export function blendColors(baseColor, blendColor, opacity) {
    const baseRgb = hexToRgb(baseColor);
    const blendRgb = hexToRgb(blendColor);
  
    const blendedRgb = {
      r: Math.round(baseRgb.r * (1 - opacity) + blendRgb.r * opacity),
      g: Math.round(baseRgb.g * (1 - opacity) + blendRgb.g * opacity),
      b: Math.round(baseRgb.b * (1 - opacity) + blendRgb.b * opacity)
    };
  
    return rgbToHex(blendedRgb.r, blendedRgb.g, blendedRgb.b);
  }
  