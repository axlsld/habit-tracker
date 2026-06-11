import type { Habit } from "../types/Habit";
import { getToday } from "../utils/date";

interface Props {
  habit: Habit;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}

const HabitsCard = ({ habit, onDelete, onToggle }: Props) => {
  const today = getToday();

  const doneToday = habit.completedDates.includes(today);
  return (
    <>
      <div>
        <h2>{habit.name}</h2>
        <p>{habit.description}</p>

        <button onClick={() => onToggle(habit.id)}>
          {doneToday ? "✓ Done" : "Mark Done"}
        </button>
        <button onClick={() => onDelete(habit.id)}>Delete</button>
      </div>
    </>
  );
};

export default HabitsCard;
