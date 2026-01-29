
import SleepChart from '@/components/sleep/SleepChart';
import SleepHeader from '@/components/sleep/SleepHeader';
import WeeklySleep from '@/components/sleep/WeeklySleep';
import { Colors } from '@/constants/Colors';
import React from 'react';
import { ScrollView, StyleSheet, View } from 'react-native';

export default function Sleep() {
  return (
    <View style={styles.container}>
      <SleepHeader />
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <SleepChart />
        <WeeklySleep />
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
});
