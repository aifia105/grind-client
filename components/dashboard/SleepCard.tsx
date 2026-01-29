import { Colors } from '@/constants/Colors';
import { getFontFamily } from '@/constants/Fonts';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function SleepCard() {
  const sleepData = {
    hours: 7.5,
    quality: 'Good',
    bedtime: '11:30 PM',
    wakeup: '7:00 AM',
  };

  const getSleepColor = (hours: number) => {
    if (hours >= 8) return Colors.accent.success;
    if (hours >= 7) return Colors.accent.warning;
    return Colors.accent.error;
  };

  const getSleepQuality = (hours: number) => {
    if (hours >= 8) return 'Excellent';
    if (hours >= 7) return 'Good';
    if (hours >= 6) return 'Fair';
    return 'Poor';
  };

  return (
    <View style={styles.container}>
      <View style={styles.sleepHoursContainer}>
        <Text style={styles.title}>Sleep</Text>
        <Text style={styles.subtitle}>Last Night</Text>
        <Text style={[styles.sleepHours, { color: getSleepColor(sleepData.hours) }]}>
          {sleepData.hours}h
        </Text>
        <Text style={styles.qualityText}>
          {getSleepQuality(sleepData.hours)}
        </Text>
      </View>
      
      <View style={styles.sleepDetails}>
        <View style={styles.sleepDetailRow}>
          <Text style={styles.detailLabel}>Bedtime</Text>
          <Text style={styles.detailValue}>{sleepData.bedtime}</Text>
        </View>
        <View style={styles.sleepDetailRow}>
          <Text style={styles.detailLabel}>Wake up</Text>
          <Text style={styles.detailValue}>{sleepData.wakeup}</Text>
        </View>
      </View>
      
      <View style={styles.sleepProgress}>
        <View style={styles.progressContainer}>
          <View style={styles.progressTrack}>
            <View 
              style={[
                styles.progressFill,
                { 
                  width: `${Math.min((sleepData.hours / 9) * 100, 100)}%`,
                  backgroundColor: getSleepColor(sleepData.hours)
                }
              ]}
            />
          </View>
          <Text style={styles.progressLabel}>Sleep Goal: 8h</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.surface.primary,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: Colors.border.primary,
  },
  title: {
    fontSize: 18,
    fontFamily: getFontFamily('spaceGrotesk', 'bold'),
    color: Colors.text.primary,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 12,
    fontFamily: getFontFamily('notoSans', 'regular'),
    color: Colors.text.secondary,
    marginBottom: 16,
  },
  sleepHoursContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  sleepHours: {
    fontSize: 36,
    fontFamily: getFontFamily('spaceGrotesk', 'bold'),
    marginBottom: 4,
  },
  qualityText: {
    fontSize: 14,
    fontFamily: getFontFamily('notoSans', 'medium'),
    color: Colors.text.secondary,
  },
  sleepDetails: {
    marginBottom: 16,
    gap: 8,
  },
  sleepDetailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: 8,
  },
  detailLabel: {
    fontSize: 14,
    fontFamily: getFontFamily('notoSans', 'regular'),
    color: Colors.text.secondary,
  },
  detailValue: {
    fontSize: 14,
    fontFamily: getFontFamily('notoSans', 'medium'),
    color: Colors.text.primary,
  },
  sleepProgress: {
    marginTop: 'auto',
  },
  progressContainer: {
    gap: 8,
  },
  progressTrack: {
    height: 6,
    backgroundColor: Colors.surface.elevated,
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
  progressLabel: {
    fontSize: 12,
    fontFamily: getFontFamily('notoSans', 'regular'),
    color: Colors.text.secondary,
    textAlign: 'center',
  },
});
