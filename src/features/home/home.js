import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Link, Route, Routes } from 'react-router-dom';
import LoginForm from '../user/components/loginUser';
import RegistrationForm from '../user/components/registerUser';

const Home = () => (
  <div>
    <h1>Welcome to the Home component!</h1>
    <div>
      <nav>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>
      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegistrationForm />} />
      </Routes>
    </div>
  </div>
);

export default Home;
