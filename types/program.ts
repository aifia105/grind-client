import type { WorkoutSession } from "./workoutSession";

export type Program = {
  id: number;
  startDate: string; // ISO 8601 date string
  description: string;
  duration: number; // days
  split: Split;
  workoutSessions?: WorkoutSession[];
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
};

export enum Split {
  FullBody = 'Full Body',
  UpperLower = 'Upper Lower',
  PushPull = 'Push Pull',
  UpperBody = 'Upper Body',
  LowerBody = 'Lower Body',
  BroSplit = 'Bro Split',
}

// DTO for creating programs
export type CreateProgramRequest = {
  startDate: string; // ISO 8601 date string
  description: string;
  duration: number;
  split: Split;
};

// DTO for updating programs
export type UpdateProgramRequest = Partial<CreateProgramRequest>;
