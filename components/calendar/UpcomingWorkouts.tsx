import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { getFontFamily } from '@/constants/Fonts';
import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function UpcomingWorkouts() {
  const upcomingWorkouts = [
    {
      id: '1',
      name: 'Upper Body Strength',
      date: 'Today',
      time: '6:00 PM',
      duration: '45 min',
      exercises: 8,
      image: require('@/assets/images/TrainingTypes/upper.jpg'),
    },
    {
      id: '2',
      name: 'Lower Body Power',
      date: 'Tomorrow',
      time: '7:00 AM',
      duration: '50 min',
      exercises: 6,
      image: require('@/assets/images/TrainingTypes/lower.jpg'),
    },
    {
      id: '3',
      name: 'Full Body Circuit',
      date: 'Wednesday',
      time: '6:30 PM',
      duration: '40 min',
      exercises: 10,
      image: require('@/assets/images/TrainingTypes/full.jpg'),
    },
  ];

  const getStatusColor = (date: string) => {
    switch (date) {
      case 'Today': return '#4ade80';
      case 'Tomorrow': return '#fbbf24';
      default: return '#9cbab3';
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Upcoming Workouts</Text>
        <TouchableOpacity>
          <Text style={styles.viewAllText}>View all</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.workoutsList}>
        {upcomingWorkouts.map((workout) => (
          <TouchableOpacity key={workout.id} style={styles.workoutCard}>
            <Image source={workout.image} style={styles.workoutImage} />
            <View style={styles.workoutOverlay} />
            <View style={styles.workoutContent}>
              <View style={styles.workoutInfo}>
                <View style={[styles.statusDot, { backgroundColor: getStatusColor(workout.date) }]} />
                <Text style={styles.workoutName}>{workout.name}</Text>
                <Text style={styles.workoutSchedule}>
                  {workout.date} • {workout.time}
                </Text>
              </View>
              <View style={styles.workoutStats}>
                <View style={styles.statItem}>
                  <IconSymbol size={14} name="gear" color="#ffffff" />
                  <Text style={styles.statText}>{workout.duration}</Text>
                </View>
                <View style={styles.statItem}>
                  <IconSymbol size={14} name="dumbbell.fill" color="#ffffff" />
                  <Text style={styles.statText}>{workout.exercises} exercises</Text>
                </View>
              </View>
            </View>
            <TouchableOpacity style={styles.playButton}>
              <IconSymbol size={16} name="paperplane.fill" color="#111816" />
            </TouchableOpacity>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
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
  workoutsList: {
    gap: 12,
  },
  workoutCard: {
    height: 120,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  workoutImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  workoutOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  workoutContent: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  workoutInfo: {
    flex: 1,
  },
  statusDot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginBottom: 8,
  },
  workoutName: {
    fontSize: 16,
    fontFamily: getFontFamily('spaceGrotesk', 'bold'),
    color: Colors.text.primary,
    marginBottom: 4,
  },
  workoutSchedule: {
    fontSize: 12,
    fontFamily: getFontFamily('notoSans', 'regular'),
    color: Colors.text.primary,
    opacity: 0.8,
  },
  workoutStats: {
    flexDirection: 'row',
    gap: 16,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  statText: {
    fontSize: 12,
    fontFamily: getFontFamily('notoSans', 'medium'),
    color: Colors.text.primary,
    opacity: 0.9,
  },
  playButton: {
    position: 'absolute',
    top: 16,
    right: 16,
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.accent.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
