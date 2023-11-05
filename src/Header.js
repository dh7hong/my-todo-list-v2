import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
  <header style={{ display: 'flex', justifyContent: 'space-between', maxWidth: '1200px', minWidth: '800px' }}>
    <h5>My Todo List</h5> {/* Text on the left */}
    <h5>React</h5> {/* Text on the right */}
  </header>
);

export default Header;
