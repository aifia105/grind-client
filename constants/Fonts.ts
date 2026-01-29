export const Fonts = {
  // Noto Sans - Primary font for body text and general content
  notoSans: {
    regular: 'NotoSans_400Regular',
    medium: 'NotoSans_500Medium',
    bold: 'NotoSans_700Bold',
    black: 'NotoSans_900Black',
  },
  // Space Grotesk - Secondary font for headings and special text
  spaceGrotesk: {
    regular: 'SpaceGrotesk_400Regular',
    medium: 'SpaceGrotesk_500Medium',
    bold: 'SpaceGrotesk_700Bold',
  },
  // Fallback font
  spaceMono: 'SpaceMono',
} as const;

// Helper functions for easy font usage
export const getFontFamily = (
  font: 'notoSans' | 'spaceGrotesk' | 'spaceMono' = 'notoSans',
  weight: 'regular' | 'medium' | 'bold' | 'black' = 'regular'
) => {
  if (font === 'spaceMono') {
    return Fonts.spaceMono;
  }
  
  if (font === 'spaceGrotesk') {
    // Space Grotesk doesn't have black weight, fallback to bold
    const actualWeight = weight === 'black' ? 'bold' : weight;
    return Fonts.spaceGrotesk[actualWeight] || Fonts.spaceGrotesk.regular;
  }
  
  return Fonts.notoSans[weight] || Fonts.notoSans.regular;
};
