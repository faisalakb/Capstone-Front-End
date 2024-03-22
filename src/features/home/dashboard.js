import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../user/loginUserSlice';
import HouseList from '../house/components/Houses';
import CreateHouseForm from '../house/components/addHouseForm';

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button type="button" onClick={handleLogout}>Logout</button>
      <CreateHouseForm />
      <hr />
      <HouseList />
    </div>
  );
};

export default Dashboard;
