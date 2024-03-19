import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postRegisterUser, selectStatus } from '../registrationSlice';

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    name: '',
  });

  const status = useSelector(selectStatus);
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postRegisterUser({ user: formData }));
    setFormData({
      email: '',
      password: '',
      name: '',
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div>
      <h2>Create an account</h2>
      {status === 'loading' && <div>Creating account...</div>}
      {status === 'failed' && <div>Registration failed. Please try again.</div>}
      {status === 'succeeded' && <div>Account created! You can now  log in.</div>}
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email">
            Email Address:
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label htmlFor="password">
            Password:
            <input type="password" name="password" value={formData.password} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label htmlFor="name">
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} required />
          </label>
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
