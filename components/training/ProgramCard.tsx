import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { getFontFamily } from '@/constants/Fonts';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface ProgramCardProps {
  program: {
    id: number;
    Description: string;
    duration: string;
    split: string;
    image: any;
    exercisesNumber: number;
  };
}

export default function ProgramCard({ program }: ProgramCardProps) {
  const getDifficultyColor = (split: string) => {
    switch (split) {
      case 'Full Body':
        return '#8b5cf6';
      case 'Upper Body':
        return '#f59e0b';
      case 'Lower Body':
        return '#ef4444';
      default:
        return '#4ade80';
    }
  };

  return (
    <TouchableOpacity style={styles.container}>
      <Image source={program.image} style={styles.backgroundImage} />
      <View style={styles.overlay} />
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.titleSection}>
            <View
              style={[
                styles.splitBadge,
                { backgroundColor: getDifficultyColor(program.split) },
              ]}
            >
              <Text style={styles.splitText}>{program.split}</Text>
            </View>
            <Text style={styles.title}>{program.Description}</Text>
          </View>
          <TouchableOpacity style={styles.playButton}>
            <IconSymbol size={20} name="paperplane.fill" color="#111816" />
          </TouchableOpacity>
        </View>

        <View style={styles.footer}>
          <View style={styles.statsContainer}>
            <View style={styles.statItem}>
              <IconSymbol size={16} name="gear" color="#ffffff" />
              <Text style={styles.statText}>{program.duration}</Text>
            </View>
            <View style={styles.statItem}>
              <IconSymbol size={16} name="dumbbell.fill" color="#ffffff" />
              <Text style={styles.statText}>
                {program.exercisesNumber} exercises
              </Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 200,
    borderRadius: 20,
    overflow: 'hidden',
    marginBottom: 16,
    position: 'relative',
    ...Colors.shadow.medium,
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  overlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
  },
  content: {
    flex: 1,
    padding: 24,
    justifyContent: 'space-between',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  titleSection: {
    flex: 1,
  },
  splitBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginBottom: 10,
  },
  splitText: {
    fontSize: 11,
    fontFamily: getFontFamily('notoSans', 'black'),
    color: '#ffffff',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  title: {
    fontSize: 22,
    fontFamily: getFontFamily('spaceGrotesk', 'black'),
    color: '#ffffff',
    lineHeight: 26,
    letterSpacing: -0.5,
  },
  playButton: {
    backgroundColor: Colors.accent.primary,
    width: 52,
    height: 52,
    borderRadius: 26,
    justifyContent: 'center',
    alignItems: 'center',
    ...Colors.shadow.glow,
  },
  footer: {
    marginTop: 'auto',
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 16,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.15)',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 12,
  },
  statText: {
    fontSize: 13,
    fontFamily: getFontFamily('notoSans', 'bold'),
    color: '#ffffff',
  },
});
