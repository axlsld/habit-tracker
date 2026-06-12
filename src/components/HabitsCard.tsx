import type { Habit } from "../types/Habit";
import { getToday } from "../utils/date";

interface Props {
  habits: Habit;
  onDelete: (id: string) => void;
  onToggle: (id: string) => void;
}

const HabitsCard = ({ habits, onDelete, onToggle }: Props) => {
  const today = getToday();

  const doneToday = habits.completedDates.includes(today);
  return (
    <>
      <div>
        <h2>{habits.name}</h2>
        <p>{habits.description}</p>
        <div className="w-full px-10 mx-auto bg-white p-3 rounded-2xl">
          <button  className="w-full bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 ease-in-out shadow-md hover:shadow-lg" onClick={() => onToggle(habits.id)}>
            {doneToday ? "✓ Done" : "Mark Done"}
          </button>
          <button className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 ease-in-out shadow-md hover:shadow-lg" onClick={() => onDelete(habits.id)}>Delete</button>

        </div>
      </div>
    </>
  );
};

export default HabitsCard;
