import type { Exercise } from './exercise';

export type ExerciseSet = {
  id: number;
  workoutSessionId: number;
  exerciseId: number;
  exercise?: Exercise;
  setNumber: number;
  reps: number;
  weight: number;
  restTime: number; // seconds
  rpe?: number; // 1-10 Rate of Perceived Exertion
  tempo?: string; // e.g., "3-0-1-0" (eccentric-pause-concentric-pause)
  completed: boolean;
  notes?: string;
  createdAt: string;
  updatedAt: string;
};

export type CreateExerciseSetRequest = {
  workoutSessionId: number;
  exerciseId: number;
  setNumber: number;
  reps: number;
  weight: number;
  restTime: number;
  rpe?: number;
  tempo?: string;
  completed?: boolean;
  notes?: string;
};

export type UpdateExerciseSetRequest = Partial<
  Omit<CreateExerciseSetRequest, 'workoutSessionId'>
>;
