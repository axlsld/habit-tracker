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
      <div className="border-1 rounded-lg p-3 min-h-50 flex flex-col">
        <h2>{habits.name}</h2>
        <p>{habits.description}</p>
        <div className="flex mx-3 space-x-4 bg-white rounded-2xl mt-auto">
          <button
            className={`w-full font-medium py-2 px-4 rounded-lg transition duration-200 ease-in-out shadow-md hover:shadow-lg border
            ${
              doneToday
                ? "bg-green-600 text-white border-green-600 hover:bg-green-700"
                : "bg-white text-green-600 border-green-600 hover:bg-green-50"
            }`}
            onClick={() => onToggle(habits.id)}
          >
            {doneToday ? "✓ Done" : "Mark Done"}
          </button>
          <button
            className="w-full bg-red-600 hover:bg-red-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 ease-in-out shadow-md hover:shadow-lg"
            onClick={() => onDelete(habits.id)}
          >
            Delete
          </button>
        </div>
      </div>
    </>
  );
};

export default HabitsCard;
