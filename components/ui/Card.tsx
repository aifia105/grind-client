import { Colors } from '@/constants/Colors';
import { getFontFamily } from '@/constants/Fonts';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface GradientCardProps {
  children: React.ReactNode;
  colors?: string[];
  height?: number | string;
  borderRadius?: number;
}

export function GradientCard({
  children,
  colors = Colors.accent.gradient.purple,
  height,
  borderRadius = 20,
}: GradientCardProps) {
  return (
    <LinearGradient
      colors={colors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={[
        styles.gradientCard,
        {
          borderRadius,
          ...(height && { height }),
        },
      ]}
    >
      {children}
    </LinearGradient>
  );
}

interface GlassCardProps {
  children: React.ReactNode;
  height?: number | string;
  borderRadius?: number;
  padding?: number;
}

export function GlassCard({
  children,
  height,
  borderRadius = 20,
  padding = 20,
}: GlassCardProps) {
  return (
    <View
      style={[
        styles.glassCard,
        {
          borderRadius,
          padding,
          ...(height && { height }),
        },
      ]}
    >
      {children}
    </View>
  );
}

interface StatCardProps {
  title: string;
  value: string | number;
  subtitle?: string;
  icon?: string;
  trend?: 'up' | 'down' | 'neutral';
  trendValue?: string;
  color?: string;
}

export function StatCard({
  title,
  value,
  subtitle,
  icon,
  trend,
  trendValue,
  color = Colors.accent.primary,
}: StatCardProps) {
  const getTrendColor = () => {
    if (trend === 'up') return Colors.accent.success;
    if (trend === 'down') return Colors.accent.error;
    return Colors.text.secondary;
  };

  const getTrendIcon = () => {
    if (trend === 'up') return '↑';
    if (trend === 'down') return '↓';
    return '→';
  };

  return (
    <View style={styles.statCard}>
      <View style={styles.statHeader}>
        {icon && <Text style={styles.statIcon}>{icon}</Text>}
        <Text style={styles.statTitle}>{title}</Text>
      </View>
      <Text style={[styles.statValue, { color }]}>{value}</Text>
      {subtitle && <Text style={styles.statSubtitle}>{subtitle}</Text>}
      {trend && trendValue && (
        <View style={styles.trendContainer}>
          <Text style={[styles.trendText, { color: getTrendColor() }]}>
            {getTrendIcon()} {trendValue}
          </Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  gradientCard: {
    padding: 20,
    ...Colors.shadow.medium,
  },
  glassCard: {
    backgroundColor: Colors.surface.glass,
    borderWidth: 1,
    borderColor: Colors.border.primary,
    ...Colors.shadow.small,
  },
  statCard: {
    backgroundColor: Colors.surface.primary,
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.border.primary,
    minHeight: 120,
    justifyContent: 'space-between',
  },
  statHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  statIcon: {
    fontSize: 18,
    marginRight: 8,
  },
  statTitle: {
    fontSize: 13,
    fontFamily: getFontFamily('notoSans', 'medium'),
    color: Colors.text.tertiary,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  statValue: {
    fontSize: 28,
    fontFamily: getFontFamily('spaceGrotesk', 'black'),
    letterSpacing: -0.5,
    marginBottom: 4,
  },
  statSubtitle: {
    fontSize: 12,
    fontFamily: getFontFamily('notoSans', 'regular'),
    color: Colors.text.secondary,
  },
  trendContainer: {
    marginTop: 8,
  },
  trendText: {
    fontSize: 12,
    fontFamily: getFontFamily('spaceGrotesk', 'bold'),
  },
});
