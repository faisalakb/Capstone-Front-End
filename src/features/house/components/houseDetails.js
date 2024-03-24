import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllHouses } from '../getHousesSlice';
import { addFavorite } from '../../favorite/addFavoriteSlice'; // Import the addFavorite action

const HouseDetails = () => {
  const dispatch = useDispatch();
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
    <div className="static flex flex-col h-screen w-screen bg-secondary pt-4">
      <Link to="/dashboard" className="m-4 w-[33.5vw] bg-slate-800 text-white rounded-lg p-2">Back to all houses</Link>
      <div className="flex-grow h-full w-full pt-4">
        <img className="h-[60vh]" src={house.photo} alt={house.title} />
        <h2 className="text-center font-medium pt-4">{house.title}</h2>
        <p className="text-slate-500 p-2">{house.description}</p>
        <button className="bg-primary text-center text-white w-full font-semibold p-4 absolute bottom-0" type="button" onClick={handleAddToFavorites}>Add to favorites</button>
      </div>
    </div>
  );
};

export default HouseDetails;
