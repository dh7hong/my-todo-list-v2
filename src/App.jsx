import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Header from './Header'; // Assuming this component exists
import TodoList from './TodoList'; // Component we will create
import Details from './Details'; // Component we will create
import './App.css';

function App() {
  // State for managing the list of todo items
  const [todos, setTodos] = useState([]);

  // Function to add a new todo item
  const addTodo = (todo) => {
    setTodos([...todos, { ...todo, id: Date.now(), isDone: false }]);
  };

  // Function to delete a todo item
  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Function to mark a todo as done or move it back to working
  const toggleTodoDone = (id) => {
    setTodos(todos.map(todo => {
      if (todo.id === id) return { ...todo, isDone: !todo.isDone };
      return todo;
    }));
  };

  // Get the current location
  const location = useLocation();

  // Check if the pathname is the homepage ('/')
  const isHome = location.pathname === '/';

  return (
    <div className="Window">
   
        <div className="App">
          {isHome && <Header />}
          <Routes>
            <Route path="/" element={
              <TodoList
                todos={todos}
                addTodo={addTodo}
                deleteTodo={deleteTodo}
                toggleTodoDone={toggleTodoDone}
              />
            } />
            <Route path="/details/:id" element={<Details todos={todos} />} />
          </Routes>
        </div>
   
    </div>
  );
}

export default App;
