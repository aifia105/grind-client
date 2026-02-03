import { Colors } from '@/constants/Colors';
import { getFontFamily } from '@/constants/Fonts';
import React from 'react';
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { IconSymbol } from './IconSymbol';

interface ButtonProps {
  title: string;
  onPress: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'small' | 'medium' | 'large';
  disabled?: boolean;
  loading?: boolean;
  icon?: string;
  iconPosition?: 'left' | 'right';
  fullWidth?: boolean;
}

export default function Button({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  disabled = false,
  loading = false,
  icon,
  iconPosition = 'left',
  fullWidth = false,
}: ButtonProps) {
  const getContainerStyle = () => {
    const baseStyle = [styles.container];

    // Size
    if (size === 'small') baseStyle.push(styles.containerSmall);
    else if (size === 'large') baseStyle.push(styles.containerLarge);
    else baseStyle.push(styles.containerMedium);

    // Variant
    if (variant === 'primary') baseStyle.push(styles.containerPrimary);
    else if (variant === 'secondary') baseStyle.push(styles.containerSecondary);
    else if (variant === 'outline') baseStyle.push(styles.containerOutline);
    else if (variant === 'ghost') baseStyle.push(styles.containerGhost);

    // States
    if (disabled || loading) baseStyle.push(styles.containerDisabled);
    if (fullWidth) baseStyle.push(styles.containerFullWidth);

    return baseStyle;
  };

  const getTextStyle = () => {
    const baseStyle = [styles.text];

    // Size
    if (size === 'small') baseStyle.push(styles.textSmall);
    else if (size === 'large') baseStyle.push(styles.textLarge);
    else baseStyle.push(styles.textMedium);

    // Variant
    if (variant === 'primary') baseStyle.push(styles.textPrimary);
    else if (variant === 'secondary') baseStyle.push(styles.textSecondary);
    else if (variant === 'outline') baseStyle.push(styles.textOutline);
    else if (variant === 'ghost') baseStyle.push(styles.textGhost);

    // States
    if (disabled || loading) baseStyle.push(styles.textDisabled);

    return baseStyle;
  };

  const getIconColor = () => {
    if (disabled || loading) return Colors.text.tertiary;
    if (variant === 'primary') return Colors.background.primary;
    return Colors.accent.primary;
  };

  const getIconSize = () => {
    if (size === 'small') return 16;
    if (size === 'large') return 24;
    return 20;
  };

  return (
    <TouchableOpacity
      style={getContainerStyle()}
      onPress={onPress}
      disabled={disabled || loading}
      activeOpacity={0.8}
    >
      {loading ? (
        <ActivityIndicator
          color={
            variant === 'primary'
              ? Colors.background.primary
              : Colors.accent.primary
          }
          size="small"
        />
      ) : (
        <View style={styles.content}>
          {icon && iconPosition === 'left' && (
            <IconSymbol
              name={icon}
              size={getIconSize()}
              color={getIconColor()}
            />
          )}
          <Text style={getTextStyle()}>{title}</Text>
          {icon && iconPosition === 'right' && (
            <IconSymbol
              name={icon}
              size={getIconSize()}
              color={getIconColor()}
            />
          )}
        </View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 16,
    alignItems: 'center',
    justifyContent: 'center',
  },
  containerSmall: {
    paddingVertical: 10,
    paddingHorizontal: 16,
  },
  containerMedium: {
    paddingVertical: 14,
    paddingHorizontal: 24,
  },
  containerLarge: {
    paddingVertical: 18,
    paddingHorizontal: 32,
  },
  containerPrimary: {
    backgroundColor: Colors.accent.primary,
    ...Colors.shadow.medium,
  },
  containerSecondary: {
    backgroundColor: Colors.surface.primary,
    borderWidth: 1,
    borderColor: Colors.border.primary,
  },
  containerOutline: {
    backgroundColor: 'transparent',
    borderWidth: 2,
    borderColor: Colors.accent.primary,
  },
  containerGhost: {
    backgroundColor: 'transparent',
  },
  containerDisabled: {
    opacity: 0.5,
  },
  containerFullWidth: {
    width: '100%',
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  text: {
    fontFamily: getFontFamily('spaceGrotesk', 'bold'),
  },
  textSmall: {
    fontSize: 13,
  },
  textMedium: {
    fontSize: 15,
  },
  textLarge: {
    fontSize: 17,
  },
  textPrimary: {
    color: Colors.background.primary,
  },
  textSecondary: {
    color: Colors.text.primary,
  },
  textOutline: {
    color: Colors.accent.primary,
  },
  textGhost: {
    color: Colors.text.primary,
  },
  textDisabled: {
    color: Colors.text.tertiary,
  },
});
