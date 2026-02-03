import { Colors } from '@/constants/Colors';
import { getFontFamily } from '@/constants/Fonts';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function StatsGrid() {
  const stats = [
    {
      title: 'Water',
      value: '2.1L',
      target: '3.0L',
      icon: '💧',
      progress: 70,
      color: Colors.accent.info,
    },
    {
      title: 'Streak',
      value: '12',
      target: 'days',
      icon: '🔥',
      progress: 100,
      color: Colors.accent.warning,
    },
    {
      title: 'Weight',
      value: '75.2kg',
      target: '-0.8kg',
      icon: '⚖️',
      progress: 65,
      color: Colors.accent.success,
    },
    {
      title: 'Steps',
      value: '8,420',
      target: '10,000',
      icon: '👟',
      progress: 84,
      color: Colors.accent.primary,
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Today's Stats</Text>
      <View style={styles.grid}>
        {stats.map((stat, index) => (
          <View key={index} style={styles.statCard}>
            <View style={styles.statHeader}>
              <Text style={styles.statIcon}>{stat.icon}</Text>
              <Text style={styles.statTitle}>{stat.title}</Text>
            </View>
            <Text style={styles.statValue}>{stat.value}</Text>
            <Text style={styles.statTarget}>{stat.target}</Text>
            <View style={styles.progressContainer}>
              <View style={styles.progressBar}>
                <View
                  style={[
                    styles.progressFill,
                    {
                      width: `${stat.progress}%`,
                      backgroundColor: stat.color,
                    },
                  ]}
                />
              </View>
              <Text style={styles.progressText}>{stat.progress}%</Text>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 4,
  },
  title: {
    fontSize: 22,
    fontFamily: getFontFamily('spaceGrotesk', 'bold'),
    color: Colors.text.primary,
    marginBottom: 16,
    letterSpacing: -0.5,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  statCard: {
    backgroundColor: Colors.surface.primary,
    borderRadius: 20,
    padding: 18,
    borderWidth: 1,
    borderColor: Colors.border.primary,
    width: '48%',
    minHeight: 130,
    justifyContent: 'space-between',
    ...Colors.shadow.small,
  },
  statHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
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
    fontSize: 24,
    fontFamily: getFontFamily('spaceGrotesk', 'black'),
    color: Colors.text.primary,
    marginBottom: 2,
    letterSpacing: -0.5,
  },
  statTarget: {
    fontSize: 12,
    fontFamily: getFontFamily('notoSans', 'medium'),
    color: Colors.text.secondary,
    marginBottom: 14,
  },
  progressContainer: {
    gap: 6,
  },
  progressBar: {
    height: 6,
    backgroundColor: Colors.surface.elevated,
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
  progressText: {
    fontSize: 10,
    fontFamily: getFontFamily('spaceGrotesk', 'bold'),
    color: Colors.text.tertiary,
    textAlign: 'right',
  },
});
