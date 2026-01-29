import ProgramCard from '@/components/training/ProgramCard';
import TrainingHeader from '@/components/training/TrainingHeader';
import WorkoutHistory from '@/components/training/WorkoutHistory';
import { Colors } from '@/constants/Colors';
import { getFontFamily } from '@/constants/Fonts';
import { useProgramStore } from '@/stores/programStore';
import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function Training() {
  const { programs, error, clearErrors } = useProgramStore();

  const programsMock = [
    {
      id: 1,
      Description: 'Full Body Workout',
      duration: '45 min',
      split: 'Full Body',
      image: require('@/assets/images/TrainingTypes/full.jpg'),
      exercisesNumber: 10,
    },
    {
      id: 2,
      Description: 'Upper Body Strength',
      duration: '30 min',
      split: 'Upper Body',
      image: require('@/assets/images/TrainingTypes/up.jpg'),
      exercisesNumber: 8,
    },
    {
      id: 3,
      Description: 'Lower Body Blast',
      duration: '30 min',
      split: 'Lower Body',
      image: require('@/assets/images/TrainingTypes/low.jpg'),
      exercisesNumber: 8,
    },
  ];

  return (
    <View style={styles.container}>
      <TrainingHeader />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>My Programs</Text>
          <View style={styles.programsList}>
            {programsMock.map((program) => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </View>
        </View>

        <WorkoutHistory />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.primary,
    paddingTop: 24,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  section: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily: getFontFamily('spaceGrotesk', 'bold'),
    color: Colors.text.primary,
    marginBottom: 16,
  },
  programsList: {
    gap: 0,
  },
});
