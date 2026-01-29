export type workoutsSessions = {
  id: string;
  programId: string;
  duration: string;
  exercises: Exercises[];
  description: string;
  note: string;
};

export type Exercises = {
  id: string;
  title: string;
  duration: string;
  setNumber: number;
  reps: number;
  weight: number;
  resetTime: number;
};
