import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

const TodoItem = ({ todo, deleteTodo, toggleTodoDone, isDone }) => (
  <div className="CardStyle">
    <Link to={`/details/${todo.id}`}>Details</Link>
    <h3 style={{ fontWeight: 'bold' }}>{todo.title}</h3>

    <p>{todo.content}</p>
    <div className='button-set'>

      <button className='todo-delete-button' onClick={() => deleteTodo(todo.id)}>Delete</button>
      <button className='todo-complete-button' onClick={() => toggleTodoDone(todo.id)}>
        {(() => {
          if (isDone) {
            return 'Cancel!';
          } else {
            return 'Finished!';
          }
        })()}
      </button>
    </div>
  </div>
);

export default TodoItem;
