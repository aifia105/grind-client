import DailyMacros from '@/components/nutrition/DailyMacros';
import MealCard from '@/components/nutrition/MealCard';
import NutritionHeader from '@/components/nutrition/NutritionHeader';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { getFontFamily } from '@/constants/Fonts';
import React, { useState } from 'react';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Meals() {
  const [selectedDate, setSelectedDate] = useState(new Date());

  const meals = [
    {
      id: '1',
      name: 'Breakfast',
      foods: ['Oatmeal with berries', 'Greek yogurt', 'Banana'],
      calories: 450,
      time: '8:30 AM',
    },
    {
      id: '2',
      name: 'Lunch',
      foods: ['Grilled chicken breast', 'Brown rice', 'Mixed vegetables'],
      calories: 620,
      time: '12:45 PM',
    },
    {
      id: '3',
      name: 'Snack',
      foods: ['Protein shake', 'Almonds'],
      calories: 280,
      time: '3:30 PM',
    },
    {
      id: '4',
      name: 'Dinner',
      foods: ['Salmon fillet', 'Sweet potato', 'Garden salad'],
      calories: 580,
      time: '7:00 PM',
    },
  ];

  return (
    <View style={styles.container}>
      <NutritionHeader />

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <DailyMacros />

        <View style={styles.mealsSection}>
          <View style={styles.mealsHeader}>
            <Text style={styles.sectionTitle}>Today's Meals</Text>
            <View style={styles.actionButtons}>
              <TouchableOpacity style={styles.aiButton}>
                <IconSymbol
                  size={18}
                  name="sparkles"
                  color={Colors.background.primary}
                />
              </TouchableOpacity>
              <TouchableOpacity style={styles.addButton}>
                <IconSymbol
                  size={18}
                  name="plus"
                  color={Colors.background.primary}
                />
              </TouchableOpacity>
            </View>
          </View>

          {meals.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background.primary,
    paddingTop: 30,
  },
  scrollView: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  mealsSection: {
    marginTop: 24,
  },
  mealsHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    paddingBottom: 6,
  },
  sectionTitle: {
    fontSize: 24,
    fontFamily: getFontFamily('spaceGrotesk', 'bold'),
    color: Colors.text.primary,
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 8,
  },
  aiButton: {
    backgroundColor: Colors.accent.primary,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  addButton: {
    backgroundColor: Colors.accent.primary,
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
