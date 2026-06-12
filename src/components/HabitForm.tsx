import { useState, type FormEvent } from "react";
import type { HabitInput } from "../types/Habit";

interface Habit {
  name: string;
  desc: string;
}

interface Props {
  onAdd: (habit: HabitInput) => void;
}

const HabitForm = ({ onAdd }: Props) => {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  // const nameRef = useRef<HTMLInputElement>(null);
  // const descRef = useRef<HTMLTextAreaElement>(null);
  // const habit = { name: "", desc: "" };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // if (nameRef.current !== null) habit.name = nameRef.current.value;
    // if (descRef.current !== null) habit.desc = descRef.current.value;
    // console.log(habit);

    if (!name.trim()) return;
    if (!desc.trim()) return;

    onAdd({
      name: name,
      description: desc,
    });

    setName("");
    setDesc("");
  };

  return (
    <>
      <form
        className="w-full mx-auto bg-white mb-5 rounded-2xl"
        onSubmit={handleSubmit}
      >
        <h2 className="p-3">Add a New Habit!</h2>
        <div className="mb-3">
          <label
            htmlFor="name"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Name
          </label>
          <input
            required
            id='name'
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl
            focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="New habit..."
          ></input>
        </div>
        <div className="mb-3">
          <label
            htmlFor="desc"
            className="block text-sm font-medium text-gray-700 mb-2"
          >
            Description
          </label>
          <textarea
            required
            id='desc'
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            className="w-full align-text-top h-40 px-4 py-3 border border-gray-300 rounded-xl
            focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            placeholder="Add a description"
          ></textarea>
        </div>
        <button
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition duration-200 ease-in-out shadow-md hover:shadow-lg"
          type="submit"
        >
          Add Habit
        </button>
      </form>
    </>
  );
};

export default HabitForm;
