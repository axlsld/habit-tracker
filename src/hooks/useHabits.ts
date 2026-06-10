import { useEffect, useState } from "react"
import type { Habit } from "../types/Habit";
import { getHabits, saveHabits } from "../services/localStorage";
import { getToday } from "../utils/date";

export const useHabits = () => {
  const [habits, setHabits] = useState<Habit[]>([]);

  useEffect(() => {
    setHabits(getHabits());
  }, []);

  useEffect(() => {
    saveHabits(habits);
  }, [habits]);

  const addHabit = (name: string) => {
    const newHabit: Habit = {
      id: crypto.randomUUID(),
      name,
      createdAt: getToday(),
      completedDates: [],
    }; 

    setHabits([...habits, newHabit]);
  };

  const deleteHabit = (id: string) => {
    setHabits(habits.filter(h => h.id === id));
  };

  const toggleToday = (id: string) => {
    const today = getToday();

    setHabits(
      habits.map(h => {
        if (h.id !== id) return h;

        const isDone = h.completedDates.includes(today);

        return {
          ...h,
          completedDates: isDone
            ? h.completedDates.filter(d => d !== today)
            : [...h.completedDates, today],
        };
      })
    );
  };

  return {
    habits,
    addHabit,
    deleteHabit,
    toggleToday,
  };
};