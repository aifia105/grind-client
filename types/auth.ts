export type LoginCredentials = {
  email: string;
  password: string;
};

export type RegisterCredentials = {
  name: string;
  age: number;
  email: string;
  password: string;
  confirmPassword: string;
};

export type RegisterResponse = {
  message: string;
};

export type LoginResponse = {
  accessToken: string;
  refreshToken: string;
  user: User;
};

export type User = {
  id: string;
  name: string;
  email: string;
  createdAt: string;
};
