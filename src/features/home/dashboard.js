import React from 'react';
import { useDispatch } from 'react-redux';
import { logoutUser } from '../user/loginUserSlice';

const Dashboard = () => {
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logoutUser());
    // Code to clear token or perform other necessary actions
  };

  return (
    <div>
      <h1>Hello</h1>
      <button type="button" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;
