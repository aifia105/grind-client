import { Colors } from '@/constants/Colors';
import { getFontFamily } from '@/constants/Fonts';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function WeeklySleep() {
  const weeklyData = [
    { day: 'Mon', hours: 7.2, quality: 85 },
    { day: 'Tue', hours: 6.8, quality: 75 },
    { day: 'Wed', hours: 8.1, quality: 90 },
    { day: 'Thu', hours: 7.5, quality: 82 },
    { day: 'Fri', hours: 6.5, quality: 70 },
    { day: 'Sat', hours: 8.5, quality: 95 },
    { day: 'Sun', hours: 7.8, quality: 88 },
  ];

  const averageHours = weeklyData.reduce((sum, day) => sum + day.hours, 0) / weeklyData.length;
  const averageQuality = weeklyData.reduce((sum, day) => sum + day.quality, 0) / weeklyData.length;

  const getSleepColor = (hours: number) => {
    if (hours >= 8) return '#4ade80';
    if (hours >= 7) return '#fbbf24';
    return '#ef4444';
  };

  const getBarHeight = (hours: number) => {
    const maxHeight = 60;
    const maxHours = 9;
    return (hours / maxHours) * maxHeight;
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>This Week</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View all</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{averageHours.toFixed(1)}h</Text>
          <Text style={styles.statLabel}>Avg. Sleep</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>{Math.round(averageQuality)}%</Text>
          <Text style={styles.statLabel}>Avg. Quality</Text>
        </View>
      </View>
      
      <View style={styles.chartContainer}>
        <View style={styles.chart}>
          {weeklyData.map((day, index) => (
            <View key={index} style={styles.dayColumn}>
              <View style={styles.barContainer}>
                <View 
                  style={[
                    styles.bar,
                    { 
                      height: getBarHeight(day.hours),
                      backgroundColor: getSleepColor(day.hours)
                    }
                  ]} 
                />
              </View>
              <Text style={styles.hoursText}>{day.hours}h</Text>
              <Text style={styles.dayText}>{day.day}</Text>
            </View>
          ))}
        </View>
      </View>
      
      <View style={styles.legend}>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#4ade80' }]} />
          <Text style={styles.legendText}>8+ hours</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#fbbf24' }]} />
          <Text style={styles.legendText}>7-8 hours</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendDot, { backgroundColor: '#ef4444' }]} />
          <Text style={styles.legendText}>Less than 7h</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background.secondary,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: Colors.border.primary,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 20,
    fontFamily: getFontFamily('spaceGrotesk', 'bold'),
    color: Colors.text.primary,
  },
  viewAllText: {
    fontSize: 14,
    fontFamily: getFontFamily('notoSans', 'medium'),
    color: Colors.accent.primary,
  },
  statsRow: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 24,
  },
  statCard: {
    flex: 1,
    backgroundColor: Colors.background.tertiary,
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
  },
  statValue: {
    fontSize: 20,
    fontFamily: getFontFamily('spaceGrotesk', 'bold'),
    color: Colors.text.primary,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    fontFamily: getFontFamily('notoSans', 'regular'),
    color: Colors.text.secondary,
  },
  chartContainer: {
    marginBottom: 20,
  },
  chart: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    height: 80,
    paddingHorizontal: 8,
  },
  dayColumn: {
    alignItems: 'center',
    flex: 1,
  },
  barContainer: {
    height: 60,
    justifyContent: 'flex-end',
    marginBottom: 8,
  },
  bar: {
    width: 16,
    borderRadius: 8,
    minHeight: 4,
  },
  hoursText: {
    fontSize: 10,
    fontFamily: getFontFamily('notoSans', 'bold'),
    color: Colors.text.primary,
    marginBottom: 4,
  },
  dayText: {
    fontSize: 10,
    fontFamily: getFontFamily('notoSans', 'regular'),
    color: Colors.text.secondary,
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 8,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  legendDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  legendText: {
    fontSize: 11,
    fontFamily: getFontFamily('notoSans', 'regular'),
    color: Colors.text.secondary,
  },
});
