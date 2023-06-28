import React, { useState } from "react";
import './Main.css'
import {FaPlus} from 'react-icons/fa'
export function Main() {
  const [newTask, setNewTask] = useState();
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
        <button type="submit"><FaPlus/></button>
      </form>
    </div>
  );
}
