import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { getFontFamily } from '@/constants/Fonts';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface MealCardProps {
  meal: {
    id: string;
    name: string;
    foods: string[];
    calories: number;
    time: string;
  };
}

export default function MealCard({ meal }: MealCardProps) {
  const getMealIcon = (mealName: string) => {
    switch (mealName.toLowerCase()) {
      case 'breakfast':
        return '🌅';
      case 'lunch':
        return '☀️';
      case 'dinner':
        return '🌙';
      case 'snack':
        return '🍎';
      default:
        return '🍽️';
    }
  };

  return (
    <TouchableOpacity style={styles.container}>
      <View style={styles.header}>
        <View style={styles.mealInfo}>
          <View style={styles.mealTitleRow}>
            <Text style={styles.mealIcon}>{getMealIcon(meal.name)}</Text>
            <Text style={styles.mealName}>{meal.name}</Text>
          </View>
          <Text style={styles.mealTime}>{meal.time}</Text>
        </View>
        <View style={styles.caloriesContainer}>
          <Text style={styles.calories}>{meal.calories}</Text>
          <Text style={styles.caloriesLabel}>kcal</Text>
        </View>
      </View>
      
      {meal.foods.length > 0 ? (
        <View style={styles.foodsList}>
          {meal.foods.map((food, index) => (
            <View key={index} style={styles.foodItem}>
              <Text style={styles.foodText}>• {food}</Text>
            </View>
          ))}
        </View>
      ) : (
        <View style={styles.emptyState}>
          <IconSymbol size={16} name="plus" color={Colors.accent.primary} />
          <Text style={styles.emptyText}>Add food</Text>
        </View>
      )}
      
      <View style={styles.footer}>
        <TouchableOpacity style={styles.actionButton}>
          <IconSymbol size={16} name="plus" color={Colors.accent.primary} />
          <Text style={styles.actionText}>Add food</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.editButton}>
          <IconSymbol size={16} name="gear" color={Colors.text.secondary} />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.surface.primary,
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: Colors.border.primary,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  mealInfo: {
    flex: 1,
  },
  mealTitleRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  mealIcon: {
    fontSize: 18,
    marginRight: 8,
  },
  mealName: {
    fontSize: 20,
    fontFamily: getFontFamily('spaceGrotesk', 'bold'),
    color: '#ffffff',
  },
  mealTime: {
    fontSize: 14,
    fontFamily: getFontFamily('notoSans', 'regular'),
    color: Colors.text.secondary,
  },
  caloriesContainer: {
    alignItems: 'flex-end',
  },
  calories: {
    fontSize: 24,
    fontFamily: getFontFamily('spaceGrotesk', 'bold'),
    color: Colors.text.primary,
  },
  caloriesLabel: {
    fontSize: 12,
    fontFamily: getFontFamily('notoSans', 'regular'),
    color: Colors.text.secondary,
  },
  foodsList: {
    marginBottom: 16,
    gap: 8,
  },
  foodItem: {
    paddingVertical: 2,
  },
  foodText: {
    fontSize: 14,
    fontFamily: getFontFamily('notoSans', 'regular'),
    color: Colors.text.primary,
    lineHeight: 20,
  },
  emptyState: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 20,
    gap: 8,
  },
  emptyText: {
    fontSize: 14,
    fontFamily: getFontFamily('notoSans', 'medium'),
    color: Colors.accent.primary,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 16,
    borderTopWidth: 1,
    borderTopColor: Colors.border.primary,
  },
  actionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    flex: 1,
  },
  actionText: {
    fontSize: 14,
    fontFamily: getFontFamily('notoSans', 'medium'),
    color: Colors.accent.primary,
  },
  editButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.background.tertiary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
