import React, { useState, useEffect } from 'react';
import { TaskList } from './components/TaskList';
import { AddTaskForm } from './components/AddTaskForm';
import './App.css';


function App() {
  const [tasks, setTasks] = useState([]);
  
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    try {
      localStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (error) {
      console.error('Error saving tasks to localStorage:', error);
    }
  }, [tasks]);

  const addTask = (taskName) => {
    if (taskName.trim() !== '') {
      setTasks([...tasks, { id: Date.now(), name: taskName, completed: false }]);
    }
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const toggleTaskCompletion = (taskId) => {
    setTasks(tasks.map(task => {
      if (task.id === taskId) {
        return { ...task, completed: !task.completed };
      }
      return task;
    }));
  };

  return (
    <div>
      <div className='main'>
        <h1 className='main__text'>To-Do List</h1>
          <div className='main__output'>
            <AddTaskForm addTask={addTask} />
            <TaskList tasks={tasks} deleteTask={deleteTask} toggleTaskCompletion={toggleTaskCompletion} />
          </div>
      </div>
    </div>
  );
}

export default App;
