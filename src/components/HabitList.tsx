import type { Habit } from "../types/Habit";
import HabitsCard from "./HabitsCard";

interface Props {
  habits: Habit[];
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}

const HabitList = ({ habits, onDelete, onToggle }: Props) => {
  return (
    <div>
      {habits.map((h) => {
        return (
          <HabitsCard
            key={h.id}
            habits={h}
            onDelete={onDelete}
            onToggle={onToggle}
          />
        );
      })}
    </div>
  );
};

export default HabitList;
