import API from './client';
import type {
  Nutrition,
  CreateNutritionRequest,
  UpdateNutritionRequest,
  Meal,
  CreateMealRequest,
  UpdateMealRequest,
  Food,
  CreateFoodRequest,
  UpdateFoodRequest,
  MealFood,
  AddFoodToMealRequest,
  UpdateMealFoodRequest,
} from '@/types/nutrition';

// Nutrition APIs
export const createNutrition = async (
  data: CreateNutritionRequest,
): Promise<Nutrition> => {
  const response = await API.post('/nutrition', data);
  return response.data;
};

export const getNutritions = async (page = 1, limit = 30) => {
  const response = await API.get('/nutrition', { params: { page, limit } });
  return response.data;
};

export const getNutritionById = async (id: number): Promise<Nutrition> => {
  const response = await API.get(`/nutrition/${id}`);
  return response.data;
};

export const getNutritionByDate = async (date: string): Promise<Nutrition> => {
  const response = await API.get('/nutrition/date', { params: { date } });
  return response.data;
};

export const updateNutrition = async (
  id: number,
  data: UpdateNutritionRequest,
): Promise<void> => {
  await API.put(`/nutrition/${id}`, data);
};

export const deleteNutrition = async (id: number): Promise<void> => {
  await API.delete(`/nutrition/${id}`);
};

// Meal APIs
export const createMeal = async (data: CreateMealRequest): Promise<Meal> => {
  const response = await API.post('/meals', data);
  return response.data;
};

export const getMealsByNutritionId = async (
  nutritionId: number,
): Promise<Meal[]> => {
  const response = await API.get('/meals', { params: { nutritionId } });
  return response.data;
};

export const getMealById = async (id: number): Promise<Meal> => {
  const response = await API.get(`/meals/${id}`);
  return response.data;
};

export const updateMeal = async (
  id: number,
  data: UpdateMealRequest,
): Promise<void> => {
  await API.put(`/meals/${id}`, data);
};

export const deleteMeal = async (id: number): Promise<void> => {
  await API.delete(`/meals/${id}`);
};

// Food APIs
export const createFood = async (data: CreateFoodRequest): Promise<Food> => {
  const response = await API.post('/foods', data);
  return response.data;
};

export const getFoods = async (page = 1, limit = 50) => {
  const response = await API.get('/foods', { params: { page, limit } });
  return response.data;
};

export const searchFoods = async (query: string): Promise<Food[]> => {
  const response = await API.get('/foods', { params: { search: query } });
  return response.data;
};

export const getFoodById = async (id: number): Promise<Food> => {
  const response = await API.get(`/foods/${id}`);
  return response.data;
};

export const updateFood = async (
  id: number,
  data: UpdateFoodRequest,
): Promise<void> => {
  await API.put(`/foods/${id}`, data);
};

export const deleteFood = async (id: number): Promise<void> => {
  await API.delete(`/foods/${id}`);
};

// MealFood APIs
export const addFoodToMeal = async (
  data: AddFoodToMealRequest,
): Promise<MealFood> => {
  const response = await API.post('/meals/foods', data);
  return response.data;
};

export const updateMealFood = async (
  id: number,
  data: UpdateMealFoodRequest,
): Promise<void> => {
  await API.put(`/meals/foods/${id}`, data);
};

export const removeFoodFromMeal = async (id: number): Promise<void> => {
  await API.delete(`/meals/foods/${id}`);
};
