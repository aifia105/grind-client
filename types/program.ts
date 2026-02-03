import type { WorkoutSession } from './workoutSession';

export type Program = {
  id: number;
  name: string;
  description: string;
  goal: ProgramGoal;
  difficulty: ProgramDifficulty;
  startDate: string; // ISO 8601 date string
  duration: number; // weeks
  split: Split;
  isActive: boolean;
  workoutSessions?: WorkoutSession[];
  createdAt: string;
  updatedAt: string;
  deletedAt?: string | null;
};

export enum ProgramGoal {
  Strength = 'Strength',
  Hypertrophy = 'Hypertrophy',
  Endurance = 'Endurance',
  WeightLoss = 'Weight Loss',
  GeneralFitness = 'General Fitness',
  Powerlifting = 'Powerlifting',
  Bodybuilding = 'Bodybuilding',
  AthleticPerformance = 'Athletic Performance',
}

export enum ProgramDifficulty {
  Beginner = 'Beginner',
  Intermediate = 'Intermediate',
  Advanced = 'Advanced',
  Expert = 'Expert',
}

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
  name: string;
  description: string;
  goal: ProgramGoal;
  difficulty: ProgramDifficulty;
  startDate: string; // ISO 8601 date string
  duration: number; // weeks
  split: Split;
};

// DTO for updating programs
export type UpdateProgramRequest = Partial<CreateProgramRequest>;
