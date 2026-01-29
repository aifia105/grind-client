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
      case 'Full Body': return '#8b5cf6';
      case 'Upper Body': return '#f59e0b';
      case 'Lower Body': return '#ef4444';
      default: return '#4ade80';
    }
  };

  return (
    <TouchableOpacity style={styles.container}>
      <Image source={program.image} style={styles.backgroundImage} />
      <View style={styles.overlay} />
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.titleSection}>
            <View style={[styles.splitBadge, { backgroundColor: getDifficultyColor(program.split) }]}>
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
              <Text style={styles.statText}>{program.exercisesNumber} exercises</Text>
            </View>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 180,
    borderRadius: 16,
    overflow: 'hidden',
    marginBottom: 16,
    position: 'relative',
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
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  content: {
    flex: 1,
    padding: 20,
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
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
    marginBottom: 8,
  },
  splitText: {
    fontSize: 12,
    fontFamily: getFontFamily('notoSans', 'bold'),
    color: '#ffffff',
  },
  title: {
    fontSize: 20,
    fontFamily: getFontFamily('spaceGrotesk', 'bold'),
    color: '#ffffff',
    lineHeight: 24,
  },
  playButton: {
    backgroundColor: Colors.accent.primary,
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.accent.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  footer: {
    marginTop: 'auto',
  },
  statsContainer: {
    flexDirection: 'row',
    gap: 20,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  statText: {
    fontSize: 14,
    fontFamily: getFontFamily('notoSans', 'medium'),
    color: '#ffffff',
    opacity: 0.9,
  },
});
