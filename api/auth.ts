import { RegisterCredentials, RegisterResponse } from '@/types/auth';
import API from './client';

export const register = async (
  registerData: RegisterCredentials,
): Promise<RegisterResponse> => {
  const response = await API.post('/auth/register', registerData);
  return response.data;
};

export const login = async (
  email: string,
  password: string,
): Promise<RegisterResponse> => {
  const response = await API.post('/auth/login', { email, password });
  return response.data;
};
