import type { Exercise } from "./exercise";

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
    notes?: string;
};

export type UpdateExerciseSetRequest = Partial<
    Omit<CreateExerciseSetRequest, 'workoutSessionId'>
>;
