export type Exercise = {
    id: number;
    name: string;
    description?: string;
    muscleGroups: string[];
    equipment: string;
    imageUrl?: string;
    videoUrl?: string;
    difficulty: number; // 1-5
    isCustom: boolean;
    createdAt: string;
    updatedAt: string;
};

export type CreateExerciseRequest = {
    name: string;
    description?: string;
    muscleGroups: string[];
    equipment: string;
    imageUrl?: string;
    videoUrl?: string;
    difficulty: number;
};

export type UpdateExerciseRequest = Partial<CreateExerciseRequest>;

// Common muscle groups for filtering
export const MUSCLE_GROUPS = [
    'Chest',
    'Back',
    'Shoulders',
    'Biceps',
    'Triceps',
    'Forearms',
    'Abs',
    'Obliques',
    'Quads',
    'Hamstrings',
    'Glutes',
    'Calves',
    'Full Body',
] as const;

export type MuscleGroup = (typeof MUSCLE_GROUPS)[number];
