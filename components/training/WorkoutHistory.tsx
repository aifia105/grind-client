import { Colors } from '@/constants/Colors';
import { getFontFamily } from '@/constants/Fonts';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function WorkoutHistory() {
  const recentWorkouts = [
    {
      id: '1',
      name: 'Upper Body Strength',
      date: 'Today',
      duration: '45 min',
      exercises: 8,
      status: 'completed',
    },
    {
      id: '2',
      name: 'Lower Body Power',
      date: 'Yesterday',
      duration: '50 min',
      exercises: 6,
      status: 'completed',
    },
    {
      id: '3',
      name: 'Full Body Circuit',
      date: '2 days ago',
      duration: '35 min',
      exercises: 10,
      status: 'completed',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed': return '#4ade80';
      case 'in-progress': return '#fbbf24';
      case 'skipped': return '#ef4444';
      default: return '#9cbab3';
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Recent Workouts</Text>
      <View style={styles.workoutsList}>
        {recentWorkouts.map((workout) => (
          <TouchableOpacity key={workout.id} style={styles.workoutItem}>
            <View style={styles.workoutInfo}>
              <Text style={styles.workoutName}>{workout.name}</Text>
              <Text style={styles.workoutDate}>{workout.date}</Text>
            </View>
            <View style={styles.workoutStats}>
              <Text style={styles.workoutDuration}>{workout.duration}</Text>
              <Text style={styles.workoutExercises}>{workout.exercises} exercises</Text>
            </View>
            <View style={[styles.statusIndicator, { backgroundColor: getStatusColor(workout.status) }]} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 24,
  },
  title: {
    fontSize: 20,
    fontFamily: getFontFamily('spaceGrotesk', 'bold'),
    color: '#ffffff',
    marginBottom: 16,
  },
  workoutsList: {
    gap: 12,
  },
  workoutItem: {
    backgroundColor: Colors.surface.primary,
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
     borderColor: Colors.border.primary,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  workoutInfo: {
    flex: 1,
  },
  workoutName: {
    fontSize: 16,
    fontFamily: getFontFamily('spaceGrotesk', 'bold'),
    color: Colors.text.primary,
    marginBottom: 4,
  },
  workoutDate: {
    fontSize: 12,
    fontFamily: getFontFamily('notoSans', 'regular'),
   color: Colors.text.secondary,
  },
  workoutStats: {
    alignItems: 'flex-end',
    marginRight: 16,
  },
  workoutDuration: {
    fontSize: 14,
    fontFamily: getFontFamily('notoSans', 'medium'),
    color: Colors.text.primary,
    marginBottom: 2,
  },
  workoutExercises: {
    fontSize: 12,
    fontFamily: getFontFamily('notoSans', 'regular'),
   color: Colors.text.secondary,
  },
  statusIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    position: 'absolute',
    right: 16,
    top: 16,
  },
});
