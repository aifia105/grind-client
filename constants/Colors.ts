/**
 * Modern fitness app color palette
 * Dark theme with vibrant purple/blue accents for a premium, engaging look
 */

const primaryPurple = '#8B5FE6';
const primaryBlue = '#4F46E5';
const accentCyan = '#06B6D4';
const accentPink = '#77659bae';

export const Colors = {
  // Modern dark theme colors
  background: {
    primary: '#0A0A0F',      // Deep dark background
    secondary: '#1A1A24',     // Card backgrounds
    tertiary: '#2A2A3A',     // Elevated surfaces
  },
  surface: {
    primary: '#1A1A24',      // Primary card/surface color
    secondary: '#2A2A3A',    // Secondary surface
    elevated: '#3A3A4A',     // Elevated surfaces (buttons, etc)
  },
  text: {
    primary: '#FFFFFF',       // Primary text (headings, important)
    secondary: '#B8B8D1',    // Secondary text (descriptions)
    tertiary: '#8A8AA0',     // Tertiary text (labels, muted)
    accent: primaryPurple,    // Accent text
  },
  accent: {
    primary: primaryPurple,   // Main accent color (buttons, highlights)
    secondary: primaryBlue,   // Secondary accent
    success: '#10B981',       // Success states (progress, completed)
    warning: '#F59E0B',       // Warning states
    error: '#EF4444',         // Error states
    info: accentCyan,         // Info, water tracking, etc
    gradient: {
      start: primaryPurple,
      end: primaryBlue,
    }
  },
  border: {
    primary: '#2A2A3A',       // Primary borders
    secondary: '#3A3A4A',     // Secondary borders
    accent: primaryPurple,    // Accent borders
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
