import "./App.css";
import HabitForm from "./components/HabitForm";
import HabitsCard from "./components/HabitsCard";
import HabitList from "./components/HabitList";
import NavBar from "./components/NavBar";
import { useHabits } from "./hooks/useHabits";

function App() {
  const { habits, addHabit, deleteHabit, toggleToday } = useHabits();

  return (
    <>
      <NavBar />
      <HabitForm onAdd={addHabit}></HabitForm>
      {/* <HabitsCard habits={habits} onDelete={deleteHabit} onToggle={toggleToday}></HabitsCard> */}
      <HabitList
        habits={habits}
        onDelete={deleteHabit}
        onToggle={toggleToday}
      />
    </>
  );
}

export default App;
