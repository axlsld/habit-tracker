import { type Habit } from "../types/Habit";

const KEY = 'habits';

export const getHabits = (): Habit[] => {
  const data = localStorage.getItem(KEY);
  return data ? JSON.parse(data) : [];
};

export const saveHabits = (habits: Habit[]) => {
  localStorage.setItem(KEY, JSON.stringify(habits));
};