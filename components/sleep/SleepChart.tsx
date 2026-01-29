import { Colors } from '@/constants/Colors';
import { getFontFamily } from '@/constants/Fonts';
import React from 'react';
import { Dimensions, StyleSheet, Text, View } from 'react-native';

const { width } = Dimensions.get('window');

export default function SleepChart() {
  const sleepData = {
    bedtime: '11:30 PM',
    wakeup: '7:00 AM',
    duration: 7.5,
    quality: 85,
    deepSleep: 2.1,
    lightSleep: 4.2,
    rem: 1.2,
  };

  const getSleepColor = (hours: number) => {
    if (hours >= 8) return '#4ade80e1';
    if (hours >= 7) return '#ffb90ad3';
    return '#ef4444df';
  };

  const getQualityColor = (quality: number) => {
    if (quality >= 80) return '#4ade80e1';
    if (quality >= 60) return '#ffb90ad3';
    return '#ef4444df';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Last Night's Sleep</Text>
      
      <View style={styles.mainCard}>
        <View style={styles.sleepRing}>
          <View style={[styles.progressRing, { 
            borderColor: getSleepColor(sleepData.duration),
            borderWidth: 8,
          }]}>
            <Text style={[styles.sleepHours, { color: getSleepColor(sleepData.duration) }]}>
              {sleepData.duration}h
            </Text>
            <Text style={styles.sleepLabel}>Sleep Duration</Text>
          </View>
        </View>
        
        <View style={styles.sleepInfo}>
          <View style={styles.timeRow}>
            <View style={styles.timeItem}>
              <Text style={styles.timeLabel}>Bedtime</Text>
              <Text style={styles.timeValue}>{sleepData.bedtime}</Text>
            </View>
            <View style={styles.timeItem}>
              <Text style={styles.timeLabel}>Wake up</Text>
              <Text style={styles.timeValue}>{sleepData.wakeup}</Text>
            </View>
          </View>
          
          <View style={styles.qualitySection}>
            <Text style={styles.qualityLabel}>Sleep Quality</Text>
            <View style={styles.qualityContainer}>
              <Text style={[styles.qualityScore, { color: Colors.text.secondary }]}>
                {sleepData.quality}%
              </Text>
              <View style={styles.qualityBar}>
                <View 
                  style={[
                    styles.qualityFill, 
                    { 
                      width: `${sleepData.quality}%`,
                      backgroundColor: getQualityColor(sleepData.quality)
                    }
                  ]} 
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      
      <View style={styles.stagesContainer}>
        <Text style={styles.stagesTitle}>Sleep Stages</Text>
        <View style={styles.stagesGrid}>
          <View style={styles.stageCard}>
            <View style={[styles.stageIndicator, { backgroundColor: '#8b5cf6' }]} />
            <Text style={styles.stageName}>Deep Sleep</Text>
            <Text style={styles.stageValue}>{sleepData.deepSleep}h</Text>
          </View>
          <View style={styles.stageCard}>
            <View style={[styles.stageIndicator, { backgroundColor: '#3b82f6' }]} />
            <Text style={styles.stageName}>Light Sleep</Text>
            <Text style={styles.stageValue}>{sleepData.lightSleep}h</Text>
          </View>
          <View style={styles.stageCard}>
            <View style={[styles.stageIndicator, { backgroundColor: '#f59e0b' }]} />
            <Text style={styles.stageName}>REM Sleep</Text>
            <Text style={styles.stageValue}>{sleepData.rem}h</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontFamily: getFontFamily('spaceGrotesk', 'bold'),
    color: Colors.text.primary,
    marginBottom: 20,
  },
  mainCard: {
    backgroundColor: Colors.surface.primary,
    borderRadius: 16,
    padding: 24,
    borderWidth: 1,
    borderColor: Colors.border.primary,
    marginBottom: 20,
  },
  sleepRing: {
    alignItems: 'center',
    marginBottom: 24,
  },
  progressRing: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: Colors.background.tertiary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  sleepHours: {
    fontSize: 28,
    fontFamily: getFontFamily('spaceGrotesk', 'bold'),
    marginBottom: 4,
  },
  sleepLabel: {
    fontSize: 12,
    fontFamily: getFontFamily('notoSans', 'regular'),
    color: Colors.text.secondary,
  },
  sleepInfo: {
    gap: 20,
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  timeItem: {
    alignItems: 'center',
  },
  timeLabel: {
    fontSize: 14,
    fontFamily: getFontFamily('notoSans', 'regular'),
    color: Colors.text.secondary,
    marginBottom: 4,
  },
  timeValue: {
    fontSize: 18,
    fontFamily: getFontFamily('spaceGrotesk', 'bold'),
    color: Colors.text.primary,
  },
  qualitySection: {
    gap: 12,
  },
  qualityLabel: {
    fontSize: 16,
    fontFamily: getFontFamily('spaceGrotesk', 'bold'),
    color: Colors.text.primary,
  },
  qualityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  qualityScore: {
    fontSize: 20,
    fontFamily: getFontFamily('spaceGrotesk', 'bold'),
    minWidth: 50,
  },
  qualityBar: {
    flex: 1,
    height: 8,
    backgroundColor: Colors.background.primary,
    borderRadius: 4,
    overflow: 'hidden',
  },
  qualityFill: {
    height: '100%',
    borderRadius: 4,
  },
  stagesContainer: {
    gap: 16,
  },
  stagesTitle: {
    fontSize: 20,
    fontFamily: getFontFamily('spaceGrotesk', 'bold'),
    color: Colors.text.primary,
  },
  stagesGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  stageCard: {
    flex: 1,
    backgroundColor: Colors.background.secondary,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: Colors.border.primary,
    alignItems: 'center',
  },
  stageIndicator: {
    width: 12,
    height: 12,
    borderRadius: 6,
    marginBottom: 8,
  },
  stageName: {
    fontSize: 12,
    fontFamily: getFontFamily('notoSans', 'medium'),
    color: Colors.text.secondary,
    marginBottom: 4,
    textAlign: 'center',
  },
  stageValue: {
    fontSize: 16,
    fontFamily: getFontFamily('spaceGrotesk', 'bold'),
    color: Colors.text.primary,
  },
});
