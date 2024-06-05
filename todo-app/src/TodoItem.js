import React from 'react';

function TodoItem({ todo, index, toggleTodo, deleteTodo }) {
  return (
    <li style={{ textDecoration: todo.completed ? 'line-through' : '' }}>
      {todo.text}
      <div>
        <button onClick={() => toggleTodo(index)}>
          {todo.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => deleteTodo(index)}>Delete</button>
      </div>
    </li>
  );
}

export default TodoItem;
