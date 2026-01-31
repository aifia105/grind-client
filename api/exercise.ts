import {
    Exercise,
    CreateExerciseRequest,
    UpdateExerciseRequest,
} from '@/types/exercise';
import { ApiResponse, PaginatedResponse, PaginationParams } from '@/types/api';
import API from './client';

/**
 * Get paginated list of exercises
 */
export const getExercises = async (
    params?: PaginationParams & { muscleGroup?: string; search?: string }
): Promise<PaginatedResponse<Exercise>> => {
    const response = await API.get<PaginatedResponse<Exercise>>('/exercises', {
        params,
    });
    return response.data;
};

/**
 * Get a single exercise by ID
 */
export const getExercise = async (id: number): Promise<Exercise> => {
    const response = await API.get<ApiResponse<Exercise>>(`/exercises/${id}`);
    return response.data.data;
};

/**
 * Create a new exercise
 */
export const createExercise = async (
    data: CreateExerciseRequest
): Promise<Exercise> => {
    const response = await API.post<ApiResponse<Exercise>>('/exercises', data);
    return response.data.data;
};

/**
 * Update an existing exercise
 */
export const updateExercise = async (
    id: number,
    data: UpdateExerciseRequest
): Promise<Exercise> => {
    const response = await API.put<ApiResponse<Exercise>>(
        `/exercises/${id}`,
        data
    );
    return response.data.data;
};

/**
 * Delete an exercise
 */
export const deleteExercise = async (id: number): Promise<void> => {
    await API.delete(`/exercises/${id}`);
};
