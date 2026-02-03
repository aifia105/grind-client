import API from './client';
import type {
  BodyMeasurement,
  CreateBodyMeasurementRequest,
  UpdateBodyMeasurementRequest,
  Supplement,
  CreateSupplementRequest,
  UpdateSupplementRequest,
} from '@/types/health';

// Body Measurement APIs
export const createBodyMeasurement = async (
  data: CreateBodyMeasurementRequest,
): Promise<BodyMeasurement> => {
  const response = await API.post('/bodyMeasurements', data);
  return response.data;
};

export const getBodyMeasurements = async (page = 1, limit = 30) => {
  const response = await API.get('/bodyMeasurements', {
    params: { page, limit },
  });
  return response.data;
};

export const getBodyMeasurementById = async (
  id: number,
): Promise<BodyMeasurement> => {
  const response = await API.get(`/bodyMeasurements/${id}`);
  return response.data;
};

export const getLatestBodyMeasurement = async (): Promise<BodyMeasurement> => {
  const response = await API.get('/bodyMeasurements/latest');
  return response.data;
};

export const getBodyMeasurementsByDateRange = async (
  startDate: string,
  endDate: string,
): Promise<BodyMeasurement[]> => {
  const response = await API.get('/bodyMeasurements', {
    params: { startDate, endDate },
  });
  return response.data;
};

export const updateBodyMeasurement = async (
  id: number,
  data: UpdateBodyMeasurementRequest,
): Promise<void> => {
  await API.put(`/bodyMeasurements/${id}`, data);
};

export const deleteBodyMeasurement = async (id: number): Promise<void> => {
  await API.delete(`/bodyMeasurements/${id}`);
};

// Supplement APIs
export const createSupplement = async (
  data: CreateSupplementRequest,
): Promise<Supplement> => {
  const response = await API.post('/supplements', data);
  return response.data;
};

export const getSupplements = async (): Promise<Supplement[]> => {
  const response = await API.get('/supplements');
  return response.data;
};

export const getSupplementsByTiming = async (
  timing: string,
): Promise<Supplement[]> => {
  const response = await API.get('/supplements', { params: { timing } });
  return response.data;
};

export const getSupplementById = async (id: number): Promise<Supplement> => {
  const response = await API.get(`/supplements/${id}`);
  return response.data;
};

export const updateSupplement = async (
  id: number,
  data: UpdateSupplementRequest,
): Promise<void> => {
  await API.put(`/supplements/${id}`, data);
};

export const deleteSupplement = async (id: number): Promise<void> => {
  await API.delete(`/supplements/${id}`);
};
