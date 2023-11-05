import React, { useState } from 'react';
import TodoItem from './TodoItem'; // This will be our todo card component
import './App.css';

const TodoList = ({ todos, addTodo, deleteTodo, toggleTodoDone }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  // Handles the submission of a new todo
  const handleAddTodo = () => {
    if (title.trim() && content.trim()) {
      addTodo({ title, content });
      setTitle('');
      setContent('');
    }
  };
  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <div>
      <form className='NavForm' onSubmit={handleSubmit}>
      
        <div className="TitleContents">
          <label className='TitleLabel'>Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Title"
            className="TitleInput"
          />
          <label className='ContentLabel'>Content</label>
          <input
            type="text"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            placeholder="Contents"
            className="ContentInput"
          />
        </div>
        <button className="AddButton" onClick={handleAddTodo}>Add</button>

      </form>
      
        <h2>Working...🔥</h2>
        {/* Render todos that are not done */}
        <div className="flex-parent">
        {todos.filter(todo => !todo.isDone).map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodoDone={toggleTodoDone}
          />
        ))}
        </div>
        <h2>Done...!🎉</h2>
        {/* Render todos that are done */}
        <div className="flex-parent">
        {todos.filter(todo => todo.isDone).map(todo => (
          <TodoItem
            key={todo.id}
            todo={todo}
            deleteTodo={deleteTodo}
            toggleTodoDone={toggleTodoDone}
            isDone
          />
        ))}

      </div>
    </div>
  );
};

export default TodoList;
