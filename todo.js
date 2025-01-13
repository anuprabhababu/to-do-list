"use client";
import React from "react";

function MainComponent() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState("");
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    date: "",
    completed: false,
  });
  const addTask = () => {
    if (newTask.title && newTask.description && newTask.date) {
      setTasks([...tasks, newTask]);
      setNewTask({ title: "", description: "", date: "", completed: false });
    }
  };
  const toggleTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FF6B6B] to-[#4ECDC4] p-4 max-w-[480px] mx-auto">
      {step === 1 && (
        <div className="flex flex-col items-center justify-center space-y-8 min-h-[80vh]">
          <h1 className="text-5xl font-bold font-roboto text-white">To Do ✓</h1>
          <p className="text-2xl font-roboto text-white opacity-90">
            Organize along with me
          </p>
          <button
            onClick={() => setStep(2)}
            className="bg-white text-[#FF6B6B] px-8 py-3 rounded-full text-lg font-bold shadow-lg hover:scale-105 transition-transform"
          >
            Get Started
          </button>
        </div>
      )}

      {step === 2 && (
        <div className="flex flex-col items-center justify-center space-y-6 min-h-[80vh]">
          <h2 className="text-3xl font-roboto text-white">What's your name?</h2>
          <input
            type="text"
            name="username"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border-0 p-4 rounded-full w-[280px] text-lg shadow-lg focus:outline-none"
            placeholder="Enter your name"
          />
          <button
            onClick={() => name && setStep(3)}
            className="bg-white text-[#FF6B6B] px-8 py-3 rounded-full text-lg font-bold shadow-lg hover:scale-105 transition-transform"
          >
            Continue
          </button>
        </div>
      )}

      {step === 3 && (
        <div className="max-w-full space-y-6">
          <h2 className="text-3xl font-roboto text-white text-center">
            Hi {name}! 👋
          </h2>
          <div className="bg-white/90 p-6 rounded-2xl shadow-lg space-y-4">
            <input
              type="text"
              name="title"
              value={newTask.title}
              onChange={(e) =>
                setNewTask({ ...newTask, title: e.target.value })
              }
              className="border-0 bg-white p-4 rounded-xl w-full shadow-sm text-lg"
              placeholder="Task Title"
            />
            <textarea
              name="description"
              value={newTask.description}
              onChange={(e) =>
                setNewTask({ ...newTask, description: e.target.value })
              }
              className="border-0 bg-white p-4 rounded-xl w-full shadow-sm text-lg h-[100px]"
              placeholder="Task Description"
            />
            <input
              type="date"
              name="date"
              value={newTask.date}
              onChange={(e) => setNewTask({ ...newTask, date: e.target.value })}
              className="border-0 bg-white p-4 rounded-xl w-full shadow-sm text-lg"
            />
            <button
              onClick={addTask}
              className="bg-[#4ECDC4] text-white px-6 py-4 rounded-xl text-lg font-bold w-full hover:bg-[#45b8b0] transition-colors shadow-md"
            >
              Add Task +
            </button>
          </div>

          <div className="space-y-4">
            {tasks.map((task, index) => (
              <div
                key={index}
                className="bg-white/90 p-5 rounded-2xl shadow-lg flex items-start space-x-4"
              >
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(index)}
                  className="h-6 w-6 mt-1 accent-[#4ECDC4]"
                />
                <div
                  className={`flex-1 ${
                    task.completed ? "line-through text-gray-400" : ""
                  }`}
                >
                  <h3 className="font-bold text-lg text-[#333]">
                    {task.title}
                  </h3>
                  <p className="text-gray-600 mt-1">{task.description}</p>
                  <p className="text-sm text-[#4ECDC4] mt-2">
                    Due: {task.date}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default MainComponent;
