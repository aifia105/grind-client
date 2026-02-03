import API from './client';
import type {
  Sleep,
  CreateSleepRequest,
  UpdateSleepRequest,
} from '@/types/sleep';

export const createSleep = async (data: CreateSleepRequest): Promise<Sleep> => {
  const response = await API.post('/sleep', data);
  return response.data;
};

export const getSleeps = async (page = 1, limit = 30) => {
  const response = await API.get('/sleep', { params: { page, limit } });
  return response.data;
};

export const getSleepById = async (id: number): Promise<Sleep> => {
  const response = await API.get(`/sleep/${id}`);
  return response.data;
};

export const getSleepByDate = async (date: string): Promise<Sleep> => {
  const response = await API.get('/sleep/date', { params: { date } });
  return response.data;
};

export const getWeekSleeps = async (
  startDate: string,
  endDate: string,
): Promise<Sleep[]> => {
  const response = await API.get('/sleep/week', {
    params: { startDate, endDate },
  });
  return response.data;
};

export const updateSleep = async (
  id: number,
  data: UpdateSleepRequest,
): Promise<void> => {
  await API.put(`/sleep/${id}`, data);
};

export const deleteSleep = async (id: number): Promise<void> => {
  await API.delete(`/sleep/${id}`);
};
