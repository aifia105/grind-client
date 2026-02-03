/**
 * Modern fitness app color palette
 * Dark theme with vibrant purple/blue accents for a premium, engaging look
 */

const primaryPurple = '#A855F7';
const primaryBlue = '#6366F1';
const accentCyan = '#06B6D4';
const accentPink = '#EC4899';
const emeraldGreen = '#10B981';
const amberYellow = '#F59E0B';

export const Colors = {
  // Modern dark theme colors
  background: {
    primary: '#0A0A0F', // Deep dark background
    secondary: '#14141F', // Slightly lighter
    tertiary: '#1E1E2D', // Elevated surfaces
  },
  surface: {
    primary: 'rgba(26, 26, 36, 0.8)', // Primary card with transparency
    secondary: 'rgba(42, 42, 58, 0.6)', // Secondary surface
    elevated: 'rgba(58, 58, 74, 0.8)', // Elevated surfaces
    glass: 'rgba(26, 26, 36, 0.4)', // Glass morphism
  },
  text: {
    primary: '#FFFFFF', // Primary text (headings, important)
    secondary: '#B8B8D1', // Secondary text (descriptions)
    tertiary: '#8A8AA0', // Tertiary text (labels, muted)
    accent: primaryPurple, // Accent text
  },
  accent: {
    primary: primaryPurple, // Main accent color
    secondary: primaryBlue, // Secondary accent
    tertiary: accentPink, // Tertiary accent
    success: emeraldGreen, // Success states
    warning: amberYellow, // Warning states
    error: '#EF4444', // Error states
    info: accentCyan, // Info states
    gradient: {
      purple: ['#A855F7', '#6366F1'],
      blue: ['#6366F1', '#06B6D4'],
      pink: ['#EC4899', '#A855F7'],
      success: ['#10B981', '#34D399'],
      sunset: ['#F59E0B', '#EF4444'],
    },
  },
  border: {
    primary: 'rgba(58, 58, 74, 0.3)', // Subtle borders
    secondary: 'rgba(88, 88, 104, 0.2)', // Even more subtle
    accent: primaryPurple, // Accent borders
  },
  shadow: {
    small: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 2,
    },
    medium: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.3,
      shadowRadius: 8,
      elevation: 5,
    },
    large: {
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 10 },
      shadowOpacity: 0.4,
      shadowRadius: 20,
      elevation: 10,
    },
    glow: {
      shadowColor: primaryPurple,
      shadowOffset: { width: 0, height: 0 },
      shadowOpacity: 0.5,
      shadowRadius: 15,
      elevation: 8,
    },
  },
  // Legacy support
  light: {
    text: '#0A0A0F',
    background: '#FFFFFF',
    tint: primaryPurple,
    icon: '#8A8AA0',
    tabIconDefault: '#8A8AA0',
    tabIconSelected: primaryPurple,
  },
  dark: {
    text: '#FFFFFF',
    background: '#0A0A0F',
    tint: primaryPurple,
    icon: '#B8B8D1',
    tabIconDefault: '#8A8AA0',
    tabIconSelected: primaryPurple,
  },
};
