import { Colors } from '@/constants/Colors';
import { getFontFamily } from '@/constants/Fonts';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function CalendarGrid() {
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  const today = new Date();
  const currentMonth = selectedDate.getMonth();
  const currentYear = selectedDate.getFullYear();
  
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1);
  const lastDayOfMonth = new Date(currentYear, currentMonth + 1, 0);
  const firstDayOfWeek = firstDayOfMonth.getDay();
  const daysInMonth = lastDayOfMonth.getDate();
  
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  
  // Sample workout data
  const workoutDays = [3, 5, 8, 10, 12, 15, 17, 20, 22, 24, 26, 29];
  
  const navigateMonth = (direction: number) => {
    setSelectedDate(new Date(currentYear, currentMonth + direction, 1));
  };
  
  const isToday = (day: number) => {
    return today.getDate() === day &&
           today.getMonth() === currentMonth &&
           today.getFullYear() === currentYear;
  };
  
  const hasWorkout = (day: number) => {
    return workoutDays.includes(day);
  };
  
  const renderDays = () => {
    const days = [];
    
    // Add empty cells for days before the first day of the month
    for (let i = 0; i < firstDayOfWeek; i++) {
      days.push(<View key={`empty-${i}`} style={styles.emptyDay} />);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const isSelected = isToday(day);
      const isWorkoutDay = hasWorkout(day);
      
      days.push(
        <TouchableOpacity
          key={day}
          style={[
            styles.dayCell,
            isSelected && styles.selectedDay,
            isWorkoutDay && styles.workoutDay,
          ]}
          onPress={() => {
            // Handle day selection
          }}
        >
          <Text style={[
            styles.dayText,
            isSelected && styles.selectedDayText,
            isWorkoutDay && styles.workoutDayText,
          ]}>
            {day}
          </Text>
          {isWorkoutDay && <View style={styles.workoutIndicator} />}
        </TouchableOpacity>
      );
    }
    
    return days;
  };
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigateMonth(-1)} style={styles.navButton}>
          <Text style={styles.navText}>‹</Text>
        </TouchableOpacity>
        <Text style={styles.monthYear}>
          {monthNames[currentMonth]} {currentYear}
        </Text>
        <TouchableOpacity onPress={() => navigateMonth(1)} style={styles.navButton}>
          <Text style={styles.navText}>›</Text>
        </TouchableOpacity>
      </View>
      
      <View style={styles.weekDays}>
        {dayNames.map((day) => (
          <Text key={day} style={styles.weekDayText}>
            {day}
          </Text>
        ))}
      </View>
      
      <View style={styles.calendar}>
        {renderDays()}
      </View>
      
      <View style={styles.legend}>
        <View style={styles.legendItem}>
          <View style={[styles.legendIndicator, { backgroundColor: Colors.accent.primary }]} />
          <Text style={styles.legendText}>Workout completed</Text>
        </View>
        <View style={styles.legendItem}>
          <View style={[styles.legendIndicator, { backgroundColor: '#fbbf24' }]} />
          <Text style={styles.legendText}>Today</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.background.secondary,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: Colors.border.primary,
    marginBottom: 20,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  navButton: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: Colors.surface.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  navText: {
    fontSize: 20,
    fontFamily: getFontFamily('spaceGrotesk', 'bold'),
    color: Colors.text.primary,
  },
  monthYear: {
    fontSize: 20,
    fontFamily: getFontFamily('spaceGrotesk', 'bold'),
    color: Colors.text.primary,
  },
  weekDays: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  weekDayText: {
    flex: 1,
    fontSize: 12,
    fontFamily: getFontFamily('notoSans', 'medium'),
    color: Colors.text.secondary,
    textAlign: 'center',
  },
  calendar: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginBottom: 20,
  },
  emptyDay: {
    width: '14.28%',
    height: 40,
  },
  dayCell: {
    width: '14.28%',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    marginBottom: 4,
  },
  selectedDay: {
    backgroundColor: '#fbbf24',
    borderRadius: 20,
  },
  workoutDay: {
    backgroundColor: Colors.surface.elevated,
    borderRadius: 20,
  },
  dayText: {
    fontSize: 14,
    fontFamily: getFontFamily('notoSans', 'medium'),
    color: Colors.text.primary,
  },
  selectedDayText: {
    color: '#111816',
    fontFamily: getFontFamily('notoSans', 'bold'),
  },
  workoutDayText: {
    color: Colors.text.accent,
    fontFamily: getFontFamily('notoSans', 'bold'),
  },
  workoutIndicator: {
    position: 'absolute',
    bottom: 2,
    width: 4,
    height: 4,
    borderRadius: 2,
    backgroundColor: Colors.accent.primary,
  },
  legend: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    gap: 20,
  },
  legendItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  legendIndicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
  },
  legendText: {
    fontSize: 12,
    fontFamily: getFontFamily('notoSans', 'regular'),
    color: Colors.text.secondary,
  },
});
