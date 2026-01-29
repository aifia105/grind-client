import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { getFontFamily } from '@/constants/Fonts';
import { Program, Split } from '@/types/program';
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
  onSubmit: (programData: Program) => void;
  loading?: boolean;
}

export default function CreateProgramModal({
  visible,
  onClose,
  onSubmit,
  loading = false,
}: CreateProgramModalProps) {
  const [description, setDescription] = useState('');
  const [selectedSplit, setSelectedSplit] = useState<Split>(Split.FullBody);
  const [duration, setDuration] = useState('');

  const splitOptions = [
    { label: 'Full Body', value: Split.FullBody },
    { label: 'Upper Lower', value: Split.UpperLower },
    { label: 'Push Pull', value: Split.PushPull },
    { label: 'Upper Body', value: Split.UpperBody },
    { label: 'Lower Body', value: Split.LowerBody },
    { label: 'Bro Split', value: Split.BroSplit },
  ];

  const handleSubmit = () => {
    if (!description.trim() || !duration.trim()) {
      return;
    }

    const programData = {
      start: new Date(),
      description: description.trim(),
      split: selectedSplit,
      duration: duration.trim(),
    };

    onSubmit(programData);
  };

  const handleClose = () => {
    setDescription('');
    setDuration('');
    setSelectedSplit(Split.FullBody);
    onClose();
  };

  const isFormValid = description.trim() && duration.trim();

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
              <Text style={styles.label}>Description</Text>
              <TextInput
                style={styles.textInput}
                value={description}
                onChangeText={setDescription}
                placeholder="Enter program description"
                placeholderTextColor={Colors.text.tertiary}
                multiline
                numberOfLines={3}
              />
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>Split Type</Text>
              <View style={styles.splitContainer}>
                {splitOptions.map((option) => (
                  <TouchableOpacity
                    key={option.value}
                    style={[
                      styles.splitOption,
                      selectedSplit === option.value &&
                        styles.splitOptionSelected,
                    ]}
                    onPress={() => setSelectedSplit(option.value)}
                  >
                    <Text
                      style={[
                        styles.splitOptionText,
                        selectedSplit === option.value &&
                          styles.splitOptionTextSelected,
                      ]}
                    >
                      {option.label}
                    </Text>
                  </TouchableOpacity>
                ))}
              </View>
            </View>

            <View style={styles.field}>
              <Text style={styles.label}>Duration in weeks</Text>
              <TextInput
                style={styles.textInput}
                value={duration}
                onChangeText={setDuration}
                placeholder="e.g., 8 weeks"
                placeholderTextColor={Colors.text.tertiary}
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  modal: {
    backgroundColor: Colors.background.primary,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    maxHeight: '90%',
    minHeight: '75%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: Colors.border.primary,
  },
  title: {
    fontSize: 20,
    fontFamily: getFontFamily('spaceGrotesk', 'bold'),
    color: Colors.text.primary,
  },
  closeButton: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: Colors.surface.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    flex: 1,
    padding: 20,
  },
  field: {
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    fontFamily: getFontFamily('spaceGrotesk', 'medium'),
    color: Colors.text.primary,
    marginBottom: 8,
  },
  textInput: {
    backgroundColor: Colors.surface.primary,
    borderRadius: 12,
    padding: 16,
    fontSize: 16,
    fontFamily: getFontFamily('notoSans', 'regular'),
    color: Colors.text.primary,
    borderWidth: 1,
    borderColor: Colors.border.primary,
    textAlignVertical: 'top',
  },
  splitContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  splitOption: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    backgroundColor: Colors.surface.primary,
    borderWidth: 1,
    borderColor: Colors.border.primary,
  },
  splitOptionSelected: {
    backgroundColor: Colors.accent.primary,
    borderColor: Colors.accent.primary,
  },
  splitOptionText: {
    fontSize: 14,
    fontFamily: getFontFamily('notoSans', 'medium'),
    color: Colors.text.secondary,
  },
  splitOptionTextSelected: {
    color: Colors.background.primary,
  },
  footer: {
    flexDirection: 'row',
    padding: 20,
    gap: 12,
    borderTopWidth: 1,
    borderTopColor: Colors.border.primary,
  },
  cancelButton: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 12,
    backgroundColor: Colors.surface.primary,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border.primary,
  },
  cancelButtonText: {
    fontSize: 16,
    fontFamily: getFontFamily('notoSans', 'medium'),
    color: Colors.text.secondary,
  },
  createButton: {
    flex: 1,
    paddingVertical: 16,
    borderRadius: 12,
    backgroundColor: Colors.accent.primary,
    alignItems: 'center',
  },
  createButtonDisabled: {
    backgroundColor: Colors.surface.secondary,
  },
  createButtonText: {
    fontSize: 16,
    fontFamily: getFontFamily('notoSans', 'medium'),
    color: Colors.background.primary,
  },
  createButtonTextDisabled: {
    color: Colors.text.tertiary,
  },
});
