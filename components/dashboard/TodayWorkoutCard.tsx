import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { getFontFamily } from '@/constants/Fonts';
import { useProgramStore } from '@/stores/programStore';
import React, { useEffect } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type WorkoutSession = {
  title: string;
  subtitle: string;
  duration: string;
  exercises: string;
  nextExercise: string;
  nextDetails: string;
};

export default function TodayWorkoutCard() {
  const { selectedProgram } = useProgramStore();
  const [todaySession, setTodaySession] = React.useState<WorkoutSession | null>(
    null,
  );
  const image = require(`@/assets/images/TrainingTypes/upper.jpg`);

  useEffect(() => {
    if (selectedProgram) {
      setTodaySession({
        title: selectedProgram.split,
        subtitle: selectedProgram.workoutsSessions
          ? selectedProgram.workoutsSessions[0].description
          : 'N/A',
        duration: selectedProgram.duration,
        exercises: selectedProgram.workoutsSessions
          ? `${selectedProgram.workoutsSessions.length} Exercises`
          : 'N/A',
        nextExercise: selectedProgram.workoutsSessions
          ? selectedProgram.workoutsSessions[0].exercises[0].title
          : 'N/A',
        nextDetails: selectedProgram.workoutsSessions
          ? `${selectedProgram.workoutsSessions.length > 1 ? selectedProgram.workoutsSessions[1].exercises[0].setNumber + ' sets' + '×' + selectedProgram.workoutsSessions[1].exercises[0].reps + ' reps' : 'N/A'} and more`
          : 'N/A',
      });
    }
  }, [selectedProgram, todaySession]);

  return (
    <View style={styles.container}>
      <Image source={image} style={styles.backgroundImage} />
      <View style={styles.overlay} />
      <View style={styles.content}>
        <View style={styles.header}>
          <View style={styles.titleContainer}>
            <Text style={styles.label}>Today's Workout</Text>
            <Text style={styles.title}>{todaySession?.title ?? 'N/A'}</Text>
            <Text style={styles.subtitle}>{todaySession?.subtitle}</Text>
          </View>
          <TouchableOpacity style={styles.playButton}>
            <IconSymbol
              size={24}
              name="paperplane.fill"
              color={Colors.background.primary}
            />
          </TouchableOpacity>
        </View>

        <View style={styles.workoutInfo}>
          <View style={styles.infoItem}>
            <IconSymbol size={16} name="gear" color="#9cbab3" />
            <Text style={styles.infoText}>
              {todaySession?.duration ?? 'N/A'}
            </Text>
          </View>
          <View style={styles.infoItem}>
            <IconSymbol size={16} name="dumbbell.fill" color="#9cbab3" />
            <Text style={styles.infoText}>
              {todaySession?.exercises ?? 'N/A'}
            </Text>
          </View>
        </View>

        <View style={styles.exercisePreview}>
          <Text style={styles.exerciseTitle}>
            Next: {todaySession?.nextExercise ?? 'N/A'}
          </Text>
          <Text style={styles.exerciseDetails}>
            {todaySession?.nextDetails}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderRadius: 24,
    overflow: 'hidden',
    marginBottom: 20,
    height: 240,
    position: 'relative',
    ...Colors.shadow.large,
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
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
  titleContainer: {
    flex: 1,
  },
  label: {
    fontSize: 11,
    fontFamily: getFontFamily('notoSans', 'bold'),
    color: Colors.accent.primary,
    marginBottom: 6,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  title: {
    fontSize: 28,
    fontFamily: getFontFamily('spaceGrotesk', 'black'),
    color: Colors.text.primary,
    marginBottom: 4,
    letterSpacing: -0.5,
  },
  subtitle: {
    fontSize: 15,
    fontFamily: getFontFamily('notoSans', 'medium'),
    color: Colors.text.primary,
    opacity: 0.85,
  },
  playButton: {
    backgroundColor: Colors.accent.primary,
    width: 56,
    height: 56,
    borderRadius: 28,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: Colors.accent.primary,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 8,
  },
  workoutInfo: {
    flexDirection: 'row',
    gap: 20,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  infoText: {
    fontSize: 14,
    fontFamily: getFontFamily('notoSans', 'medium'),
    color: Colors.text.primary,
    opacity: 0.9,
  },
  exercisePreview: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 16,
    backdropFilter: 'blur(10px)',
  },
  exerciseTitle: {
    fontSize: 16,
    fontFamily: getFontFamily('spaceGrotesk', 'bold'),
    color: Colors.text.primary,
    marginBottom: 4,
  },
  exerciseDetails: {
    fontSize: 14,
    fontFamily: getFontFamily('notoSans', 'regular'),
    color: Colors.text.primary,
    opacity: 0.8,
  },
});
