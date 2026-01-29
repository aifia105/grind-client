import { workoutsSessions } from './workoutsSessions';

export type Program = {
  id?: string;
  start: Date;
  description: string;
  split: Split;
  duration: string;
  workoutsSessions?: workoutsSessions[];
};

export enum Split {
  FullBody = 'Full Body',
  UpperLower = 'Upper Lower',
  PushPull = 'Push Pull',
  UpperBody = 'Upper Body',
  LowerBody = 'Lower Body',
  BroSplit = 'Bro Split',
}
