import type { ExerciseSet } from './exerciseSet';

export type WorkoutSession = {
  id: number;
  programId: number;
  name: string;
  day: number; // Day in the program
  date?: string; // ISO 8601 date string
  duration: number; // minutes
  completed: boolean;
  completedAt?: string; // ISO 8601 date string
  notes: string;
  exerciseSets?: ExerciseSet[];
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
};

export type CreateWorkoutSessionRequest = {
  programId: number;
  name: string;
  day: number;
  date?: string;
  duration?: number;
  completed?: boolean;
  notes?: string;
};

export type UpdateWorkoutSessionRequest = Partial<
  Omit<CreateWorkoutSessionRequest, 'programId'>
>;
