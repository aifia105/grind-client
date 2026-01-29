import { StyleSheet, Text, type TextProps } from 'react-native';

import { getFontFamily } from '@/constants/Fonts';
import { useThemeColor } from '@/hooks/useThemeColor';

export type ThemedTextProps = TextProps & {
  lightColor?: string;
  darkColor?: string;
  type?: 'default' | 'title' | 'defaultSemiBold' | 'subtitle' | 'link';
};

export function ThemedText({
  style,
  lightColor,
  darkColor,
  type = 'default',
  ...rest
}: ThemedTextProps) {
  const color = useThemeColor({ light: lightColor, dark: darkColor }, 'text');

  return (
    <Text
      style={[
        { color },
        type === 'default' ? styles.default : undefined,
        type === 'title' ? styles.title : undefined,
        type === 'defaultSemiBold' ? styles.defaultSemiBold : undefined,
        type === 'subtitle' ? styles.subtitle : undefined,
        type === 'link' ? styles.link : undefined,
        style,
      ]}
      {...rest}
    />
  );
}

const styles = StyleSheet.create({
  default: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: getFontFamily('notoSans', 'regular'),
  },
  defaultSemiBold: {
    fontSize: 16,
    lineHeight: 24,
    fontFamily: getFontFamily('notoSans', 'medium'),
  },
  title: {
    fontSize: 32,
    fontFamily: getFontFamily('spaceGrotesk', 'bold'),
    lineHeight: 32,
  },
  subtitle: {
    fontSize: 20,
    fontFamily: getFontFamily('spaceGrotesk', 'bold'),
  },
  link: {
    lineHeight: 30,
    fontSize: 16,
    fontFamily: getFontFamily('notoSans', 'medium'),
    color: '#0a7ea4',
  },
});
