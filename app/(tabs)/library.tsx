import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { getFontFamily } from '@/constants/Fonts';
import React, { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export default function Library() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = [
    'All',
    'Chest',
    'Back',
    'Legs',
    'Shoulders',
    'Arms',
    'Core',
  ];

  const exercises = [
    {
      id: '1',
      name: 'Bench Press',
      category: 'Chest',
      difficulty: 'Intermediate',
      equipment: 'Barbell',
      muscles: ['Chest', 'Triceps', 'Shoulders'],
      image:
        'https://images.pexels.com/photos/1552252/pexels-photo-1552252.jpeg',
    },
    {
      id: '2',
      name: 'Deadlift',
      category: 'Back',
      difficulty: 'Advanced',
      equipment: 'Barbell',
      muscles: ['Back', 'Glutes', 'Hamstrings'],
      image:
        'https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg',
    },
    {
      id: '3',
      name: 'Squat',
      category: 'Legs',
      difficulty: 'Intermediate',
      equipment: 'Barbell',
      muscles: ['Quadriceps', 'Glutes', 'Calves'],
      image:
        'https://images.pexels.com/photos/1552106/pexels-photo-1552106.jpeg',
    },
    {
      id: '4',
      name: 'Pull-ups',
      category: 'Back',
      difficulty: 'Intermediate',
      equipment: 'Pull-up Bar',
      muscles: ['Lats', 'Biceps', 'Rhomboids'],
      image:
        'https://images.pexels.com/photos/1229356/pexels-photo-1229356.jpeg',
    },
    {
      id: '5',
      name: 'Overhead Press',
      category: 'Shoulders',
      difficulty: 'Intermediate',
      equipment: 'Barbell',
      muscles: ['Shoulders', 'Triceps', 'Core'],
      image:
        'https://images.pexels.com/photos/1552242/pexels-photo-1552242.jpeg',
    },
    {
      id: '6',
      name: 'Bicep Curls',
      category: 'Arms',
      difficulty: 'Beginner',
      equipment: 'Dumbbells',
      muscles: ['Biceps', 'Forearms'],
      image:
        'https://images.pexels.com/photos/1552103/pexels-photo-1552103.jpeg',
    },
  ];

  const filteredExercises = exercises.filter((exercise) => {
    const matchesSearch =
      exercise.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      exercise.muscles.some((muscle) =>
        muscle.toLowerCase().includes(searchQuery.toLowerCase()),
      );
    const matchesCategory =
      selectedCategory === 'All' || exercise.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner':
        return Colors.accent.success;
      case 'Intermediate':
        return Colors.accent.warning;
      case 'Advanced':
        return Colors.accent.error;
      default:
        return Colors.text.secondary;
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Exercise Library</Text>
        <TouchableOpacity style={styles.aiButton}>
          <IconSymbol size={18} name="sparkles" color="#111816" />
          <Text style={styles.aiButtonText}>AI Suggest</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchInputContainer}>
          <IconSymbol size={20} name="magnifyingglass" color="#9cbab3" />
          <TextInput
            style={styles.searchInput}
            placeholder="Search exercises..."
            placeholderTextColor="#9cbab3"
            value={searchQuery}
            onChangeText={setSearchQuery}
          />
        </View>
        <TouchableOpacity style={styles.filterButton}>
          <IconSymbol
            size={20}
            name="line.3.horizontal.decrease"
            color="#9cbab3"
          />
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
        contentContainerStyle={styles.categoriesContent}
      >
        {categories.map((category) => (
          <TouchableOpacity
            key={category}
            style={[
              styles.categoryChip,
              selectedCategory === category && styles.categoryChipActive,
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text
              style={[
                styles.categoryText,
                selectedCategory === category && styles.categoryTextActive,
              ]}
            >
              {category}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        {filteredExercises.map((exercise) => (
          <TouchableOpacity key={exercise.id} style={styles.exerciseCard}>
            <Image
              source={{ uri: exercise.image }}
              style={styles.exerciseImage}
            />
            <View style={styles.exerciseContent}>
              <View style={styles.exerciseHeader}>
                <Text style={styles.exerciseName}>{exercise.name}</Text>
                <View
                  style={[
                    styles.difficultyBadge,
                    {
                      backgroundColor: getDifficultyColor(exercise.difficulty),
                    },
                  ]}
                >
                  <Text style={styles.difficultyText}>
                    {exercise.difficulty}
                  </Text>
                </View>
              </View>
              <Text style={styles.equipmentText}>{exercise.equipment}</Text>
              <View style={styles.musclesContainer}>
                {exercise.muscles.map((muscle, index) => (
                  <View key={index} style={styles.muscleTag}>
                    <Text style={styles.muscleText}>{muscle}</Text>
                  </View>
                ))}
              </View>
            </View>
          </TouchableOpacity>
        ))}
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
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 16,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontFamily: getFontFamily('spaceGrotesk', 'bold'),
    color: Colors.text.primary,
    letterSpacing: -0.015,
  },
  aiButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.accent.primary,
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 20,
    gap: 6,
  },
  aiButtonText: {
    fontSize: 12,
    fontFamily: getFontFamily('notoSans', 'medium'),
    color: Colors.background.primary,
  },
  searchContainer: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    gap: 12,
    marginBottom: 16,
  },
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Colors.surface.primary,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
    borderWidth: 1,
    borderColor: Colors.border.primary,
  },
  searchInput: {
    flex: 1,
    fontSize: 16,
    fontFamily: getFontFamily('notoSans', 'regular'),
    color: Colors.text.primary,
  },
  filterButton: {
    backgroundColor: Colors.surface.primary,
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderWidth: 1,
    borderColor: Colors.border.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  categoriesContainer: {
    marginBottom: 8,
    paddingBottom: 45,
  },
  categoriesContent: {
    paddingHorizontal: 16,
    gap: 12,
  },
  categoryChip: {
    backgroundColor: Colors.surface.primary,
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: Colors.border.primary,
    height: 40,
  },
  categoryChipActive: {
    backgroundColor: Colors.accent.primary,
    borderColor: Colors.accent.primary,
  },
  categoryText: {
    fontSize: 14,
    fontFamily: getFontFamily('notoSans', 'medium'),
    color: Colors.text.secondary,
  },
  categoryTextActive: {
    color: Colors.background.primary,
  },
  scrollView: {},
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 100,
  },
  exerciseCard: {
    backgroundColor: Colors.surface.primary,
    borderRadius: 16,
    marginBottom: 16,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: Colors.border.primary,
  },
  exerciseImage: {
    width: '100%',
    height: 160,
    backgroundColor: Colors.surface.elevated,
  },
  exerciseContent: {
    padding: 16,
  },
  exerciseHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  exerciseName: {
    fontSize: 18,
    fontFamily: getFontFamily('spaceGrotesk', 'bold'),
    color: Colors.text.primary,
    flex: 1,
  },
  difficultyBadge: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 12,
    marginLeft: 12,
  },
  difficultyText: {
    fontSize: 12,
    fontFamily: getFontFamily('notoSans', 'bold'),
    color: Colors.background.primary,
  },
  equipmentText: {
    fontSize: 14,
    fontFamily: getFontFamily('notoSans', 'regular'),
    color: Colors.text.secondary,
    marginBottom: 12,
  },
  musclesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  muscleTag: {
    backgroundColor: Colors.surface.elevated,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  muscleText: {
    fontSize: 12,
    fontFamily: getFontFamily('notoSans', 'medium'),
    color: Colors.text.secondary,
  },
});
