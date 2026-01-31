import {
    WorkoutSession,
    CreateWorkoutSessionRequest,
    UpdateWorkoutSessionRequest,
} from '@/types/workoutSession';
import { ApiResponse, PaginatedResponse, PaginationParams } from '@/types/api';
import API from './client';

/**
 * Get paginated list of workout sessions
 */
export const getWorkoutSessions = async (
    params?: PaginationParams
): Promise<PaginatedResponse<WorkoutSession>> => {
    const response = await API.get<PaginatedResponse<WorkoutSession>>(
        '/workoutSession',
        { params }
    );
    return response.data;
};

/**
 * Get a single workout session by ID
 */
export const getWorkoutSession = async (
    id: number
): Promise<WorkoutSession> => {
    const response = await API.get<ApiResponse<WorkoutSession>>(
        `/workoutSession/${id}`
    );
    return response.data.data;
};

/**
 * Create a new workout session
 */
export const createWorkoutSession = async (
    data: CreateWorkoutSessionRequest
): Promise<WorkoutSession> => {
    const response = await API.post<ApiResponse<WorkoutSession>>(
        '/workoutSession',
        data
    );
    return response.data.data;
};

/**
 * Update an existing workout session
 */
export const updateWorkoutSession = async (
    id: number,
    data: UpdateWorkoutSessionRequest
): Promise<WorkoutSession> => {
    const response = await API.put<ApiResponse<WorkoutSession>>(
        `/workoutSession/${id}`,
        data
    );
    return response.data.data;
};

/**
 * Delete a workout session
 */
export const deleteWorkoutSession = async (id: number): Promise<void> => {
    await API.delete(`/workoutSession/${id}`);
};
