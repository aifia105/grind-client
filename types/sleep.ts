export type Sleep = {
  id?: number;
  date: string; // YYYY-MM-DD format
  hoursSlept: number;
  quality: SleepQuality;
  createdAt?: string;
  updatedAt?: string;
};

export enum SleepQuality {
  VeryPoor = 1,
  Poor = 2,
  Fair = 3,
  Good = 4,
  Excellent = 5,
}

// Request types
export type CreateSleepRequest = Omit<Sleep, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateSleepRequest = Partial<CreateSleepRequest>;

// Helper function to get quality label
export const getSleepQualityLabel = (quality: SleepQuality): string => {
  const labels = {
    [SleepQuality.VeryPoor]: 'Very Poor',
    [SleepQuality.Poor]: 'Poor',
    [SleepQuality.Fair]: 'Fair',
    [SleepQuality.Good]: 'Good',
    [SleepQuality.Excellent]: 'Excellent',
  };
  return labels[quality] || 'Unknown';
};

// Helper function to get quality color
export const getSleepQualityColor = (quality: SleepQuality): string => {
  const colors = {
    [SleepQuality.VeryPoor]: '#EF4444',
    [SleepQuality.Poor]: '#F97316',
    [SleepQuality.Fair]: '#EAB308',
    [SleepQuality.Good]: '#22C55E',
    [SleepQuality.Excellent]: '#10B981',
  };
  return colors[quality] || '#6B7280';
};
