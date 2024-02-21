export const TaskItem = ({ task, deleteTask, toggleTaskCompletion }) => {
    const handleDelete = () => {
      deleteTask(task.id);
    };
  
    const handleToggleCompletion = () => {
      toggleTaskCompletion(task.id);
    };
  
    return (
      <div>
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleToggleCompletion}
        />
        <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
          {task.name}
        </span>
        <button onClick={handleDelete}>Delete</button>
      </div>
    );
  }