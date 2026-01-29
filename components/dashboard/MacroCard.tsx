import { Colors } from '@/constants/Colors';
import { getFontFamily } from '@/constants/Fonts';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function MacroCard() {
  const macros = {
    calories: { current: 1850, target: 2400 },
    protein: { current: 120, target: 180 },
    carbs: { current: 180, target: 240 },
    fat: { current: 65, target: 80 },
  };

  const getProgress = (current: number, target: number) => (current / target) * 100;

  const getProgressColor = (progress: number) => {
    if (progress >= 90) return Colors.accent.success;
    if (progress >= 70) return Colors.accent.warning;
    return Colors.accent.error;
  };

  return (
    <View style={styles.container}>
      <View style={styles.caloriesContainer}>
        <Text style={styles.title}>Nutrition</Text>
        <Text style={styles.subtitle}>Today's Progress</Text>
        <Text style={styles.calorieNumber}>
          {macros.calories.current}
        </Text>
        <Text style={styles.calorieLabel}>
          / {macros.calories.target} kcal
        </Text>
        <View style={styles.calorieProgress}>
          <View style={styles.progressBar}>
            <View
              style={[
                styles.progressFill,
                { 
                  width: `${Math.min(getProgress(macros.calories.current, macros.calories.target), 100)}%`,
                  backgroundColor: getProgressColor(getProgress(macros.calories.current, macros.calories.target))
                }
              ]}
            />
          </View>
        </View>
      </View>
      
      <View style={styles.macrosList}>
        {Object.entries(macros).slice(1).map(([macro, data]) => {
          const progress = getProgress(data.current, data.target);
          return (
            <View key={macro} style={styles.macroRow}>
              <Text style={styles.macroLabel}>
                {macro.charAt(0).toUpperCase() + macro.slice(1)}
              </Text>
              <View style={styles.macroValueContainer}>
                <Text style={styles.macroValue}>
                  {data.current}g
                </Text>
                <View style={styles.miniProgressBar}>
                  <View
                    style={[
                      styles.miniProgressFill,
                      { 
                        width: `${Math.min(progress, 100)}%`,
                        backgroundColor: getProgressColor(progress)
                      }
                    ]}
                  />
                </View>
              </View>
            </View>
          );
        })}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.surface.primary,
    borderRadius: 16,
    padding: 20,
    borderWidth: 1,
    borderColor: Colors.border.primary,
  },
  title: {
    fontSize: 18,
    fontFamily: getFontFamily('spaceGrotesk', 'bold'),
    color: Colors.text.primary,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 12,
    fontFamily: getFontFamily('notoSans', 'regular'),
    color: Colors.text.secondary,
    marginBottom: 16,
  },
  caloriesContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  calorieNumber: {
    fontSize: 32,
    fontFamily: getFontFamily('spaceGrotesk', 'bold'),
    color: Colors.text.primary,
  },
  calorieLabel: {
    fontSize: 14,
    fontFamily: getFontFamily('notoSans', 'regular'),
    color: Colors.text.secondary,
    marginBottom: 8,
  },
  calorieProgress: {
    width: '100%',
  },
  progressBar: {
    height: 6,
    backgroundColor: Colors.surface.elevated,
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
  macrosList: {
    gap: 12,
  },
  macroRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  macroLabel: {
    fontSize: 14,
    fontFamily: getFontFamily('notoSans', 'medium'),
    color: Colors.text.primary,
    flex: 1,
  },
  macroValueContainer: {
    alignItems: 'flex-end',
    flex: 1,
  },
  macroValue: {
    fontSize: 14,
    fontFamily: getFontFamily('notoSans', 'bold'),
    color: Colors.text.primary,
    marginBottom: 4,
  },
  miniProgressBar: {
    width: 60,
    height: 3,
    backgroundColor: Colors.surface.elevated,
    borderRadius: 1.5,
    overflow: 'hidden',
  },
  miniProgressFill: {
    height: '100%',
    borderRadius: 1.5,
  },
});
