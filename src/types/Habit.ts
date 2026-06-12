export type Habit = {
  id: string;
  name: string;
  description?: string;
  createdAt: string;
  completedDates: string[];
};

export interface HabitInput {
  name: string;
  description: string;
}