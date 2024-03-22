import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllHouses } from '../getHousesSlice';
import { deleteHouse } from '../deleteHouseSlice'; // Import the deleteHouse action
import { addFavorite } from '../../favorite/addFavoriteSlice'; // Import the addFavorite action

const HouseDetails = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate(); // Use useNavigate hook
  const { id } = useParams(); // Get the id from route params
  const { status, houses, error } = useSelector((state) => state.renderHouses);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchAllHouses());
    }
  }, [status, dispatch]);

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'failed') {
    return (
      <div>
        Error:
        {error}
      </div>
    );
  }

  // Find the house with the matching id
  const house = houses.find((house) => house.id === parseInt(id, 10));

  // Handler for delete button click
  const handleDelete = async () => {
    try {
      // Dispatch the deleteHouse action with the house id
      await dispatch(deleteHouse(house.id));
      navigate('/dashboard');
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Failed to delete house:', error);
    }
  };

  // Handler for add to favorites button click
  const handleAddToFavorites = async () => {
    try {
      // Dispatch the addFavorite action with the house id
      await dispatch(addFavorite(house.id));
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Failed to add house to favorites:', error);
    }
  };

  return (
    <div className="house-details-fullscreen">
      <Link to="/dashboard">Back to all houses</Link>
      <h2>{house.title}</h2>
      <img src={house.photo} alt={house.title} />
      <button type="button" onClick={handleDelete}>Delete</button>
      <p>{house.description}</p>
      <button type="button" onClick={handleAddToFavorites}>Add to favorites</button>
    </div>
  );
};

export default HouseDetails;
