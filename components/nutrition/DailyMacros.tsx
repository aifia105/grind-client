import { Colors } from '@/constants/Colors';
import { getFontFamily } from '@/constants/Fonts';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function DailyMacros() {
  const macros = {
    calories: { current: 1850, target: 2400 },
    protein: { current: 120, target: 180 },
    carbs: { current: 180, target: 240 },
    fat: { current: 65, target: 80 },
  };

  const macroImages = [
    { title: "Calories", image: require('@/assets/images/macroImages/calories.jpg') },
    { title: "Protein", image: require('@/assets/images/macroImages/protein.jpg') },
    { title: "Carbs", image: require('@/assets/images/macroImages/carbs.jpg') },
    { title: "Fats", image: require('@/assets/images/macroImages/fats.jpg') },
  ];

  const getProgress = (current: number, target: number) => (current / target) * 100;

  const getProgressColor = (progress: number) => {
    if (progress >= 90) return '#4ade80';
    if (progress >= 70) return '#fbbf24';
    return '#ef4444';
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daily Macros</Text>
      
      <View style={styles.caloriesSection}>
        <View style={styles.caloriesCard}>
          <Image 
            source={macroImages[0].image}
            style={styles.caloriesImage}
          />
          <View style={styles.caloriesOverlay} />
          <View style={styles.caloriesContent}>
            <Text style={styles.caloriesLabel}>Calories</Text>
            <Text style={styles.caloriesNumber}>
              {macros.calories.current}
            </Text>
            <Text style={styles.caloriesTarget}>
              / {macros.calories.target} kcal
            </Text>
            <View style={styles.caloriesProgress}>
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
        </View>
      </View>
      
      <View style={styles.macrosGrid}>
        {Object.entries(macros).slice(1).map(([macro, data], index) => {
          const progress = getProgress(data.current, data.target);
          const imageIndex = index + 1; 
          return (
            <View key={macro} style={styles.macroCard}>
              <Image 
                source={macroImages[imageIndex].image}
                style={styles.macroImage}
              />
              <View style={styles.macroOverlay} />
              <View style={styles.macroContent}>
                <Text style={styles.macroLabel}>
                  {macro.charAt(0).toUpperCase() + macro.slice(1)}
                </Text>
                <Text style={styles.macroValue}>
                  {data.current}g
                </Text>
                <Text style={styles.macroTarget}>
                  / {data.target}g
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
    marginBottom: 24,
  },
  title: {
    fontSize: 24,
    fontFamily: getFontFamily('spaceGrotesk', 'bold'),
    color: Colors.text.primary,
    marginBottom: 20,
  },
  caloriesSection: {
    marginBottom: 16,
  },
  caloriesCard: {
    height: 120,
    borderRadius: 16,
    overflow: 'hidden',
    position: 'relative',
  },
  caloriesImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  caloriesOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
  },
  caloriesContent: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  caloriesLabel: {
    fontSize: 14,
    fontFamily: getFontFamily('notoSans', 'medium'),
    color: '#ffffff',
    marginBottom: 4,
    opacity: 0.9,
  },
  caloriesNumber: {
    fontSize: 32,
    fontFamily: getFontFamily('spaceGrotesk', 'bold'),
    color: Colors.text.primary,
  },
  caloriesTarget: {
    fontSize: 14,
    fontFamily: getFontFamily('notoSans', 'regular'),
    color: '#ffffff',
    marginBottom: 12,
    opacity: 0.9,
  },
  caloriesProgress: {
    width: '100%',
  },
  progressBar: {
    height: 6,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    borderRadius: 3,
  },
  macrosGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  macroCard: {
    width: '30.5%',
    height: 100,
    borderRadius: 12,
    overflow: 'hidden',
    position: 'relative',
  },
  macroImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  macroOverlay: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  macroContent: {
    flex: 1,
    padding: 12,
    justifyContent: 'space-between',
  },
  macroLabel: {
    fontSize: 12,
    fontFamily: getFontFamily('notoSans', 'medium'),
    color: '#ffffff',
    opacity: 0.9,
  },
  macroValue: {
    fontSize: 18,
    fontFamily: getFontFamily('spaceGrotesk', 'bold'),
    color: Colors.text.primary,
  },
  macroTarget: {
    fontSize: 10,
    fontFamily: getFontFamily('notoSans', 'regular'),
    color: '#ffffff',
    opacity: 0.8,
    marginBottom: 6,
  },
  miniProgressBar: {
    width: '100%',
    height: 3,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    borderRadius: 1.5,
    overflow: 'hidden',
  },
  miniProgressFill: {
    height: '100%',
    borderRadius: 1.5,
  },
});
