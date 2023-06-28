import React, { useState } from "react";
import "./Main.css";
import { FaPlus, FaEdit, FaWindowClose } from "react-icons/fa";

export function Main() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    const task = newTask.trim();
    if (tasks.includes(task)) return;

    setTasks((prevTasks) => [...prevTasks, task]);
    setNewTask("");
  }
  return (
    <div className="main">
      <h1>Lista de Tarefas</h1>
      <form onSubmit={handleSubmit} action="#" className="form">
        <input
          type="text"
          placeholder="Texto"
          value={newTask}
          onChange={(event) => setNewTask(event.target.value)}
        />
        <button type="submit">
          <FaPlus />
        </button>
      </form>
      <ul className="tasks">
        {tasks.map((task) => (
          <li key={task}>
            {task}
            <span>
              <FaEdit className="edit" />
              <FaWindowClose className="delete" />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
