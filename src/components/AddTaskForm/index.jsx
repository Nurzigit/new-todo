import React, {useState} from "react";


export const AddTaskForm = ({ addTask }) => {
    const [taskName, setTaskName] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      addTask(taskName);
      setTaskName('');
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
          placeholder="Enter task name"
        />
        <button type="submit">Add Task</button>
      </form>
    );
  }