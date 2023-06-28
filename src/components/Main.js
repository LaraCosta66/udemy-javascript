import React, { useState } from "react";
import "./Main.css";
import { FaPlus, FaEdit, FaWindowClose } from "react-icons/fa";

export function Main() {
  const [newTask, setNewTask] = useState(["drink coffe", "launch", 'somethong']);
  return (
    <div className="main">
      <h1>Lista de Tarefas</h1>
      <form action="#" className="form">
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
        {newTask.map((task) => (
          <li key={task}>
            {task}
            <div>
              <FaEdit className="edit" />
              <FaWindowClose className="delete" />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
