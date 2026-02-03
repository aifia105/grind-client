export type BodyMeasurement = {
  id?: number;
  date: string; // ISO 8601 date string
  weight: number; // kg or lbs
  bodyFat: number; // percentage
  waist: number; // cm or inches
  arms: number; // cm or inches
  thighs: number; // cm or inches
  photos?: string[]; // URLs to photos
  createdAt?: string;
  updatedAt?: string;
};

export type Supplement = {
  id?: number;
  name: string;
  dosage: number;
  unit: string; // mg, g, ml, etc.
  timing: SupplementTiming;
  notes?: string;
  createdAt?: string;
  updatedAt?: string;
};

export enum SupplementTiming {
  Morning = 'Morning',
  PreWorkout = 'Pre-Workout',
  IntraWorkout = 'Intra-Workout',
  PostWorkout = 'Post-Workout',
  Evening = 'Evening',
  BeforeBed = 'Before Bed',
}

// Request types
export type CreateBodyMeasurementRequest = Omit<
  BodyMeasurement,
  'id' | 'createdAt' | 'updatedAt'
>;
export type UpdateBodyMeasurementRequest =
  Partial<CreateBodyMeasurementRequest>;

export type CreateSupplementRequest = Omit<
  Supplement,
  'id' | 'createdAt' | 'updatedAt'
>;
export type UpdateSupplementRequest = Partial<CreateSupplementRequest>;
