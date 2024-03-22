import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'; // Importing useSelector
import { postHouse } from '../postHouseSlice';

const CreateHouseForm = () => {
  const dispatch = useDispatch();
  const { token } = useSelector((state) => state.loginUser); // Accessing token from Redux state
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    photo: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(postHouse({ houseData: formData, token })); // Passing formData and token to postHouse
    // Reset form data after submission
    setFormData({
      title: '',
      description: '',
      photo: '',
    });
  };

  return (
    <div>
      <h2>Create a House</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">
            Title:
            <input type="text" name="title" value={formData.title} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label htmlFor="description">
            Description:
            <textarea name="description" value={formData.description} onChange={handleChange} required />
          </label>
        </div>
        <div>
          <label htmlFor="photo">
            Photo (Image Link):
            <input type="url" name="photo" value={formData.photo} onChange={handleChange} required />
          </label>
        </div>
        <button type="submit">Create House</button>
      </form>
    </div>
  );
};

export default CreateHouseForm;
