export type Nutrition = {
  id?: number;
  date: string; // ISO 8601 date string
  goalCaloriesPerDay: number;
  caloriesPerDay: number;
  goalProteinPerDay: number;
  proteinPerDay: number;
  goalCarbsPerDay: number;
  carbsPerDay: number;
  goalFatPerDay: number;
  fatPerDay: number;
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFat: number;
  waterIntake: number; // liters
  goalWaterIntake: number; // liters
  createdAt?: string;
  updatedAt?: string;
};

export type Food = {
  id?: number;
  name: string;
  caloriesPer100g: number;
  proteinPer100g: number;
  carbsPer100g: number;
  fatPer100g: number;
  createdAt?: string;
  updatedAt?: string;
};

export type Meal = {
  id?: number;
  nutritionId: number;
  date: string; // ISO 8601 date string
  mealType: MealType;
  totalCalories: number;
  totalProtein: number;
  totalCarbs: number;
  totalFat: number;
  mealFoods?: MealFood[];
  createdAt?: string;
  updatedAt?: string;
};

export type MealFood = {
  id?: number;
  mealId: number;
  foodId: number;
  food?: Food;
  quantity: number; // grams
  createdAt?: string;
  updatedAt?: string;
};

export enum MealType {
  Breakfast = 'Breakfast',
  Lunch = 'Lunch',
  Dinner = 'Dinner',
  Snack = 'Snack',
  PreWorkout = 'Pre-Workout',
  PostWorkout = 'Post-Workout',
}

// Request types
export type CreateNutritionRequest = Omit<
  Nutrition,
  'id' | 'createdAt' | 'updatedAt'
>;
export type UpdateNutritionRequest = Partial<CreateNutritionRequest>;

export type CreateMealRequest = Omit<
  Meal,
  'id' | 'createdAt' | 'updatedAt' | 'mealFoods'
>;
export type UpdateMealRequest = Partial<CreateMealRequest>;

export type CreateFoodRequest = Omit<Food, 'id' | 'createdAt' | 'updatedAt'>;
export type UpdateFoodRequest = Partial<CreateFoodRequest>;

export type AddFoodToMealRequest = Omit<
  MealFood,
  'id' | 'createdAt' | 'updatedAt' | 'food'
>;
export type UpdateMealFoodRequest = Partial<AddFoodToMealRequest>;
