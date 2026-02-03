import { Colors } from '@/constants/Colors';
import { getFontFamily } from '@/constants/Fonts';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

interface ProgressRingProps {
  progress: number; // 0-100
  size?: number;
  strokeWidth?: number;
  color?: string;
  backgroundColor?: string;
  children?: React.ReactNode;
}

export default function ProgressRing({
  progress,
  size = 120,
  strokeWidth = 12,
  color = Colors.accent.primary,
  backgroundColor = Colors.surface.elevated,
  children,
}: ProgressRingProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <View style={[styles.container, { width: size, height: size }]}>
      <svg width={size} height={size} style={styles.svg}>
        {/* Background circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={backgroundColor}
          strokeWidth={strokeWidth}
          fill="none"
        />
        {/* Progress circle */}
        <circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke={color}
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(-90 ${size / 2} ${size / 2})`}
        />
      </svg>
      <View style={styles.content}>{children}</View>
    </View>
  );
}

interface ProgressBarProps {
  progress: number; // 0-100
  height?: number;
  color?: string;
  backgroundColor?: string;
  showLabel?: boolean;
  animated?: boolean;
  gradient?: boolean;
  gradientColors?: string[];
}

export function ProgressBar({
  progress,
  height = 8,
  color = Colors.accent.primary,
  backgroundColor = Colors.surface.elevated,
  showLabel = false,
  gradient = false,
  gradientColors = Colors.accent.gradient.purple,
}: ProgressBarProps) {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  return (
    <View style={styles.barContainer}>
      <View
        style={[
          styles.barBackground,
          {
            height,
            backgroundColor,
            borderRadius: height / 2,
          },
        ]}
      >
        {gradient ? (
          <LinearGradient
            colors={gradientColors}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[
              styles.barFill,
              {
                width: `${clampedProgress}%`,
                height,
                borderRadius: height / 2,
              },
            ]}
          />
        ) : (
          <View
            style={[
              styles.barFill,
              {
                width: `${clampedProgress}%`,
                height,
                backgroundColor: color,
                borderRadius: height / 2,
              },
            ]}
          />
        )}
      </View>
      {showLabel && (
        <Text style={styles.barLabel}>{Math.round(clampedProgress)}%</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  svg: {
    position: 'absolute',
  },
  content: {
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
  },
  barContainer: {
    width: '100%',
  },
  barBackground: {
    width: '100%',
    overflow: 'hidden',
  },
  barFill: {
    height: '100%',
  },
  barLabel: {
    fontSize: 11,
    fontFamily: getFontFamily('spaceGrotesk', 'bold'),
    color: Colors.text.tertiary,
    textAlign: 'right',
    marginTop: 4,
  },
});
