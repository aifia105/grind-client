import type { ExerciseSet } from "./exerciseSet";

export type WorkoutSession = {
    id: number;
    programId: number;
    name: string;
    date?: string; // ISO 8601 date string
    duration: number; // minutes
    notes: string;
    exerciseSets?: ExerciseSet[];
    createdAt: string;
    updatedAt: string;
    deletedAt?: string | null;
};

export type CreateWorkoutSessionRequest = {
    programId: number;
    name: string;
    date?: string;
    duration?: number;
    notes?: string;
};

export type UpdateWorkoutSessionRequest = Partial<
    Omit<CreateWorkoutSessionRequest, 'programId'>
>;
