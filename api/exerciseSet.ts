import {
    ExerciseSet,
    CreateExerciseSetRequest,
    UpdateExerciseSetRequest,
} from '@/types/exerciseSet';
import { ApiResponse } from '@/types/api';
import API from './client';

/**
 * Get all exercise sets for a workout session
 */
export const getExerciseSets = async (
    workoutSessionId: number
): Promise<ExerciseSet[]> => {
    const response = await API.get<ApiResponse<ExerciseSet[]>>(
        `/workoutSession/${workoutSessionId}/exerciseSets`
    );
    return response.data.data;
};

/**
 * Create a new exercise set
 */
export const createExerciseSet = async (
    data: CreateExerciseSetRequest
): Promise<ExerciseSet> => {
    const response = await API.post<ApiResponse<ExerciseSet>>(
        `/workoutSession/${data.workoutSessionId}/exerciseSets`,
        data
    );
    return response.data.data;
};

/**
 * Update an existing exercise set
 */
export const updateExerciseSet = async (
    id: number,
    data: UpdateExerciseSetRequest
): Promise<ExerciseSet> => {
    const response = await API.put<ApiResponse<ExerciseSet>>(
        `/exerciseSets/${id}`,
        data
    );
    return response.data.data;
};

/**
 * Delete an exercise set
 */
export const deleteExerciseSet = async (id: number): Promise<void> => {
    await API.delete(`/exerciseSets/${id}`);
};
