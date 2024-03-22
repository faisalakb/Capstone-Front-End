import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../user/loginUserSlice';
import HouseList from '../house/components/Houses';

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  return (
    <div>
      <nav>
        <ul>
          <li>
            <a href="/">Houses</a>
          </li>
          <li>
            <a href="/add">Add house</a>
          </li>
          <li>
            <a href="/delete">Delete a house</a>
          </li>
          <li>
            <a href="/favorites">My Favorites</a>
          </li>
        </ul>
        <button type="button" onClick={handleLogout}>
          Logout
        </button>
      </nav>
      <h1>Dashboard</h1>
      <HouseList />
    </div>
  );
};

export default Dashboard;
