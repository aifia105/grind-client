import { createProgram } from '@/api/program';
import { IconSymbol } from '@/components/ui/IconSymbol';
import { Colors } from '@/constants/Colors';
import { getFontFamily } from '@/constants/Fonts';
import { Program } from '@/types/program';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import Toast from 'react-native-toast-message';
import CreateProgramModal from './CreateProgramModal';

export default function TrainingHeader() {
  const [modalVisible, setModalVisible] = useState(false);
  const queryClient = useQueryClient();

  const programMutation = useMutation({
    mutationFn: async (programData: Program) => {
      return await createProgram(programData);
    },
    onSuccess: () => {
      setModalVisible(false);
      Toast.show({
        type: 'success',
        text1: 'Success!',
        text2: 'Program created successfully',
        position: 'top',
        visibilityTime: 3000,
      });
      queryClient.invalidateQueries({ queryKey: ['programs'] });
    },
    onError: (error) => {
      Toast.show({
        type: 'error',
        text1: 'Error!',
        text2: 'Failed to create program. Please try again.',
        position: 'top',
        visibilityTime: 4000,
      });
      console.error('Error creating program:', error);
    },
  });

  const handleCreateProgram = (programData: Program) => {
    programMutation.mutate(programData);
  };

  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Text style={styles.title}>Training</Text>
        <Text style={styles.subtitle}>Build your strength</Text>
      </View>
      <View style={styles.rightSection}>
        <TouchableOpacity
          style={styles.addButton}
          onPress={() => setModalVisible(true)}
        >
          <IconSymbol size={24} name="plus" color={Colors.background.primary} />
        </TouchableOpacity>
      </View>

      <CreateProgramModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onSubmit={handleCreateProgram}
        loading={programMutation.isPending}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 20,
    paddingBottom: 20,
  },
  leftSection: {
    flex: 1,
  },
  title: {
    fontSize: 28,
    fontFamily: getFontFamily('spaceGrotesk', 'bold'),
    color: Colors.text.primary,
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 14,
    fontFamily: getFontFamily('notoSans', 'regular'),
    color: Colors.text.secondary,
  },
  rightSection: {
    flexDirection: 'row',
    gap: 12,
  },
  iconButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.surface.primary,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: Colors.border.primary,
  },
  addButton: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: Colors.accent.primary,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
