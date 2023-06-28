import React, { useState } from "react";
import "./Main.css";
import { FaPlus, FaEdit, FaWindowClose, FaCheck } from "react-icons/fa";

export function Main() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");
  const [editIndex, setEditIndex] = useState(-1);

  function handleSubmit(e) {
    e.preventDefault();
    const task = newTask.trim();
    if (tasks.includes(task)) return;

    setTasks((prevTasks) => [...prevTasks, task]);
    setNewTask("");
  }
  function handleEdit(task) {
    const index = tasks.indexOf(task);
    setEditIndex(index);
    setNewTask(task);

    if (editIndex !== -1) {
      const updatedTasks = [...tasks];
      updatedTasks[editIndex] = newTask.trim();
      setTasks(updatedTasks);
      setEditIndex(-1);
      setNewTask("");
    }
  }

  function handleDelete(task) {
    setTasks((prevTasks) => prevTasks.filter((pTask) => pTask !== task));
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
        {tasks.map((task, index) => (
          <li key={task}>
            {index === editIndex ? (
              <input
                type="text"
                value={newTask}
                onChange={(event) => setNewTask(event.target.value)}
              />
            ) : (
              <span>{task}</span>
            )}
            <span>
              {index === editIndex ? (
                <>
                  <FaCheck className="save" onClick={handleEdit} />
                </>
              ) : (
                <FaEdit className="edit" onClick={() => handleEdit(task)} />
              )}
              <FaWindowClose
                className="delete"
                onClick={() => handleDelete(task)}
              />
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
