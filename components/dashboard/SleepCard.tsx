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
        <Text
          style={[styles.sleepHours, { color: getSleepColor(sleepData.hours) }]}
        >
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
                  backgroundColor: getSleepColor(sleepData.hours),
                },
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
    borderRadius: 20,
    padding: 20,
    borderWidth: 1,
    borderColor: Colors.border.primary,
    ...Colors.shadow.medium,
  },
  title: {
    fontSize: 18,
    fontFamily: getFontFamily('spaceGrotesk', 'bold'),
    color: Colors.text.primary,
    marginBottom: 2,
  },
  subtitle: {
    fontSize: 11,
    fontFamily: getFontFamily('notoSans', 'regular'),
    color: Colors.text.tertiary,
    marginBottom: 20,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  sleepHoursContainer: {
    alignItems: 'center',
    marginBottom: 24,
  },
  sleepHours: {
    fontSize: 44,
    fontFamily: getFontFamily('spaceGrotesk', 'black'),
    letterSpacing: -1,
  },
  qualityText: {
    fontSize: 13,
    fontFamily: getFontFamily('notoSans', 'medium'),
    color: Colors.text.secondary,
    marginTop: 4,
  },
  sleepDetails: {
    marginBottom: 20,
    gap: 10,
  },
  sleepDetailRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: Colors.surface.elevated,
    padding: 10,
    borderRadius: 10,
  },
  detailLabel: {
    fontSize: 13,
    fontFamily: getFontFamily('notoSans', 'medium'),
    color: Colors.text.secondary,
  },
  detailValue: {
    fontSize: 14,
    fontFamily: getFontFamily('spaceGrotesk', 'bold'),
    color: Colors.text.primary,
  },
  sleepProgress: {
    marginTop: 'auto',
  },
  progressContainer: {
    gap: 8,
  },
  progressTrack: {
    height: 8,
    backgroundColor: Colors.surface.elevated,
    borderRadius: 4,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 4,
  },
  progressLabel: {
    fontSize: 11,
    fontFamily: getFontFamily('notoSans', 'medium'),
    color: Colors.text.tertiary,
    textAlign: 'center',
  },
});
