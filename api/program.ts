import {
  Program,
  CreateProgramRequest,
  UpdateProgramRequest,
} from '@/types/program';
import { ApiResponse, PaginatedResponse, PaginationParams } from '@/types/api';
import API from './client';

/**
 * Get paginated list of programs
 */
export const getPrograms = async (
  params?: PaginationParams
): Promise<PaginatedResponse<Program>> => {
  const response = await API.get<PaginatedResponse<Program>>('/programs', {
    params,
  });
  return response.data;
};

/**
 * Get a single program by ID
 */
export const getProgram = async (id: number): Promise<Program> => {
  const response = await API.get<ApiResponse<Program>>(`/programs/${id}`);
  return response.data.data;
};

/**
 * Get a program with its workout sessions
 */
export const getProgramWithWorkouts = async (id: number): Promise<Program> => {
  const response = await API.get<ApiResponse<Program>>(`/programs/${id}/full`);
  return response.data.data;
};

/**
 * Create a new program
 */
export const createProgram = async (
  programData: CreateProgramRequest
): Promise<Program> => {
  const response = await API.post<ApiResponse<Program>>(
    '/programs',
    programData
  );
  return response.data.data;
};

/**
 * Update an existing program
 */
export const updateProgram = async (
  id: number,
  programData: UpdateProgramRequest
): Promise<Program> => {
  const response = await API.put<ApiResponse<Program>>(
    `/programs/${id}`,
    programData
  );
  return response.data.data;
};

/**
 * Delete a program
 */
export const deleteProgram = async (id: number): Promise<void> => {
  await API.delete(`/programs/${id}`);
};
