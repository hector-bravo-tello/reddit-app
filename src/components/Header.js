import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchPosts } from '../redux/actions/postsActions';

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchQuery.trim() !== '') {
      dispatch(searchPosts(searchQuery));
      navigate(`/search?q=${searchQuery}`);
      setSearchQuery('');
    }
  };

  return (
    <header>
      <img src="/reddit-logo.png" alt="Logo" className="logo" />
      <nav>
        <ul>
          <li>
            <NavLink to="/" end className={({ isActive }) => isActive ? 'active-link' : ''}>Home</NavLink>
          </li>
          <li>
            <NavLink to="/popular" className={({ isActive }) => isActive ? 'active-link' : ''}>Popular</NavLink>
          </li>
          {/* Add more navigation items */}
        </ul>
      </nav>
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

export default Header;