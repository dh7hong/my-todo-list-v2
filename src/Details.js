import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const Details = ({ todos }) => {
  const { id } = useParams(); // Get the id from the URL
  const navigate = useNavigate(); // For navigating back
  const todo = todos.find(todo => todo.id.toString() === id); // Find the todo by id

  // Redirects back to the main page
  const goBack = () => {
    navigate('/');
  };

  if (!todo) {
    // If the todo is not found, navigate back to the home page
    // This should prevent the 'undefined' error
    goBack();
    return null;
  }

  return (
    <div style={{ border: '1px solid gray', borderRadius: '10px', padding: '20px', position: 'relative', maxWidth: '500px', margin: 'auto' }}>
      <button className='todo-complete-button' onClick={goBack} style={{ borderRadius: '10px', border: '1px solid gray', position: 'left', right: '10px' }}>
        Back
        </button>
      <br />
      <br />
      <div>ID: {todo.id}</div>

      
      <h3 style={{ fontWeight: 'bold' }}>Title: {todo.title}</h3>
      <p>Content: {todo.content}</p>
    </div>
  );
};

export default Details;
