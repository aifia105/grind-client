import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { getFontFamily } from '@/constants/Fonts';
import {
  CreateProgramRequest,
  Split,
  ProgramGoal,
  ProgramDifficulty,
} from '@/types/program';
import React, { useState } from 'react';
import {
  Modal,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

interface CreateProgramModalProps {
  visible: boolean;
  onClose: () => void;
  onSubmit: (programData: CreateProgramRequest) => void;
  loading?: boolean;
}

export default function CreateProgramModal({
  visible,
  onClose,
  onSubmit,
  loading = false,
}: CreateProgramModalProps) {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [selectedGoal, setSelectedGoal] = useState<ProgramGoal>(
    ProgramGoal.Hypertrophy,
  );
  const [selectedDifficulty, setSelectedDifficulty] =
    useState<ProgramDifficulty>(ProgramDifficulty.Intermediate);
  const [selectedSplit, setSelectedSplit] = useState<Split>(Split.FullBody);
  const [duration, setDuration] = useState('');

  const goalOptions = [
    { label: 'Strength', value: ProgramGoal.Strength },
    { label: 'Hypertrophy', value: ProgramGoal.Hypertrophy },
    { label: 'Endurance', value: ProgramGoal.Endurance },
    { label: 'Weight Loss', value: ProgramGoal.WeightLoss },
    { label: 'General Fitness', value: ProgramGoal.GeneralFitness },
    { label: 'Powerlifting', value: ProgramGoal.Powerlifting },
    { label: 'Bodybuilding', value: ProgramGoal.Bodybuilding },
    { label: 'Athletic Performance', value: ProgramGoal.AthleticPerformance },
  ];

  const difficultyOptions = [
    { label: 'Beginner', value: ProgramDifficulty.Beginner },
    { label: 'Intermediate', value: ProgramDifficulty.Intermediate },
    { label: 'Advanced', value: ProgramDifficulty.Advanced },
    { label: 'Expert', value: ProgramDifficulty.Expert },
  ];

  const splitOptions = [
    { label: 'Full Body', value: Split.FullBody },
    { label: 'Upper Lower', value: Split.UpperLower },
    { label: 'Push Pull', value: Split.PushPull },
    { label: 'Upper Body', value: Split.UpperBody },
    { label: 'Lower Body', value: Split.LowerBody },
    { label: 'Bro Split', value: Split.BroSplit },
  ];

  const handleSubmit = () => {
    if (!name.trim() || !description.trim() || !duration.trim()) {
      return;
    }

    const programData: CreateProgramRequest = {
      name: name.trim(),
      description: description.trim(),
      goal: selectedGoal,
      difficulty: selectedDifficulty,
      split: selectedSplit,
      duration: parseInt(duration),
      startDate: new Date().toISOString(),
    };

    onSubmit(programData);
  };

  const handleClose = () => {
    setName('');
    setDescription('');
    setDuration('');
    setSelectedGoal(ProgramGoal.Hypertrophy);
    setSelectedDifficulty(ProgramDifficulty.Intermediate);
    setSelectedSplit(Split.FullBody);
    onClose();
  };

  const isFormValid =
    name.trim() &&
    description.trim() &&
    duration.trim() &&
    parseInt(duration) > 0;

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={handleClose}
    >
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <View style={styles.header}>
            <Text style={styles.title}>Create New Program</Text>
            <TouchableOpacity onPress={handleClose} style={styles.closeButton}>
              <IconSymbol
                size={24}
                name="xmark"
                color={Colors.text.secondary}
              />
            </TouchableOpacity>
          </View>

          <ScrollView
            style={styles.content}
            showsVerticalScrollIndicator={false}
          >
            <View style={styles.field}>
              <Text style={styles.label}>Program Name</Text>
              <TextInput
                style={styles.textInput}
                value={name}
                onChangeText={setName}
                placeholder="e.g., 8-Week Strength Builder"
                placeholderTextColor={Colors.text.tertiary}
              />
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>Description</Text>
              <TextInput
                style={[styles.textInput, styles.textArea]}
                value={description}
                onChangeText={setDescription}
                placeholder="Enter program description"
                placeholderTextColor={Colors.text.tertiary}
                multiline
                numberOfLines={3}
              />
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>Goal</Text>
              <View style={styles.optionContainer}>
                {goalOptions.map((option) => (
                  <TouchableOpacity
                    key={option.value}
                    style={[
                      styles.option,
                      selectedGoal === option.value && styles.optionSelected,
                    ]}
                    onPress={() => setSelectedGoal(option.value)}
                  >
                    <Text
                      style={[
                        styles.optionText,
                        selectedGoal === option.value &&
                          styles.optionTextSelected,
                      ]}
                    >
                      {option.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>Difficulty</Text>
              <View style={styles.optionContainer}>
                {difficultyOptions.map((option) => (
                  <TouchableOpacity
                    key={option.value}
                    style={[
                      styles.option,
                      selectedDifficulty === option.value &&
                        styles.optionSelected,
                    ]}
                    onPress={() => setSelectedDifficulty(option.value)}
                  >
                    <Text
                      style={[
                        styles.optionText,
                        selectedDifficulty === option.value &&
                          styles.optionTextSelected,
                      ]}
                    >
                      {option.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>Split Type</Text>
              <View style={styles.optionContainer}>
                {splitOptions.map((option) => (
                  <TouchableOpacity
                    key={option.value}
                    style={[
                      styles.option,
                      selectedSplit === option.value && styles.optionSelected,
                    ]}
                    onPress={() => setSelectedSplit(option.value)}
                  >
                    <Text
                      style={[
                        styles.optionText,
                        selectedSplit === option.value &&
                          styles.optionTextSelected,
                      ]}
                    >
                      {option.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>Duration (weeks)</Text>
              <TextInput
                style={styles.textInput}
                value={duration}
                onChangeText={setDuration}
                placeholder="e.g., 8"
                placeholderTextColor={Colors.text.tertiary}
                keyboardType="numeric"
              />
            </View>
          </ScrollView>

          <View style={styles.footer}>
            <TouchableOpacity
              style={styles.cancelButton}
              onPress={handleClose}
              disabled={loading}
            >
              <Text style={styles.cancelButtonText}>Cancel</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.createButton,
                !isFormValid && styles.createButtonDisabled,
              ]}
              onPress={handleSubmit}
              disabled={!isFormValid || loading}
            >
              <Text
                style={[
                  styles.createButtonText,
                  !isFormValid && styles.createButtonTextDisabled,
                ]}
              >
                {loading ? 'Creating...' : 'Create Program'}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    justifyContent: 'flex-end',
  },
  modal: {
    backgroundColor: Colors.background.secondary,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    maxHeight: '90%',
    minHeight: '75%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 24,
    paddingBottom: 16,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border.primary,
  },
  title: {
    fontSize: 24,
    fontFamily: getFontFamily('spaceGrotesk', 'black'),
    color: Colors.text.primary,
    letterSpacing: -0.5,
  },
  closeButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: Colors.surface.elevated,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    padding: 24,
  },
  field: {
    marginBottom: 28,
  },
  label: {
    fontSize: 14,
    fontFamily: getFontFamily('spaceGrotesk', 'bold'),
    color: Colors.text.primary,
    marginBottom: 12,
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  textInput: {
    backgroundColor: Colors.surface.primary,
    borderRadius: 16,
    padding: 18,
    fontSize: 16,
    fontFamily: getFontFamily('notoSans', 'regular'),
    color: Colors.text.primary,
    borderWidth: 1,
    borderColor: Colors.border.primary,
  },
  textArea: {
    textAlignVertical: 'top',
    minHeight: 100,
  },
  optionContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  option: {
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: Colors.surface.primary,
    borderWidth: 1.5,
    borderColor: Colors.border.primary,
  },
  optionSelected: {
    backgroundColor: Colors.accent.primary,
    borderColor: Colors.accent.primary,
  },
  optionText: {
    fontSize: 13,
    fontFamily: getFontFamily('notoSans', 'bold'),
    color: Colors.text.secondary,
  },
  optionTextSelected: {
    color: Colors.background.primary,
  },
  footer: {
    flexDirection: 'row',
    padding: 24,
    paddingTop: 16,
    gap: 12,
    borderTopWidth: 1,
    borderTopColor: Colors.border.primary,
  },
  cancelButton: {
    flex: 1,
    paddingVertical: 18,
    borderRadius: 16,
    backgroundColor: Colors.surface.primary,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border.primary,
  },
  cancelButtonText: {
    fontSize: 16,
    fontFamily: getFontFamily('spaceGrotesk', 'bold'),
    color: Colors.text.secondary,
  },
  createButton: {
    flex: 1,
    paddingVertical: 18,
    borderRadius: 16,
    backgroundColor: Colors.accent.primary,
    alignItems: 'center',
    ...Colors.shadow.medium,
  },
  createButtonDisabled: {
    backgroundColor: Colors.surface.secondary,
    opacity: 0.5,
  },
  createButtonText: {
    fontSize: 16,
    fontFamily: getFontFamily('spaceGrotesk', 'black'),
    color: Colors.background.primary,
  },
  createButtonTextDisabled: {
    color: Colors.text.tertiary,
  },
});
