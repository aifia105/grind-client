import DashboardHeader from '@/components/dashboard/DashboardHeader';
import MacroCard from '@/components/dashboard/MacroCard';
import SleepCard from '@/components/dashboard/SleepCard';
import StatsGrid from '@/components/dashboard/StatsGrid';
import TodayWorkoutCard from '@/components/dashboard/TodayWorkoutCard';
import { Colors } from '@/constants/Colors';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <DashboardHeader />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <TodayWorkoutCard />
        <View style={styles.row}>
          <MacroCard />
          <SleepCard />
        </View>
        <StatsGrid />
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
    padding: 16,
    paddingBottom: 100,
  },
  row: {
    flexDirection: 'row',
    gap: 16,
    marginBottom: 20,
  },
});
