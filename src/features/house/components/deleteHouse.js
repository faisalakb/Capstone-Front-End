import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteHouse } from '../deleteHouseSlice';
import { fetchAllHouses } from '../getHousesSlice';

const DeleteHouse = () => {
  const dispatch = useDispatch();
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

  const handleDelete = async (id) => {
    try {
      await dispatch(deleteHouse(id));
      window.location.reload();
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Failed to delete house:', error);
    }
  };

  return (
    <div className="house-list">
      {houses.map((house) => (
        <div key={house.id} className="house-card">
          <Link to={`/house/${house.id}`} className="house-card-link">
            <div className="house-photo">
              <img src={house.photo} alt={house.title} />
            </div>
            <div className="house-details">
              <h2>{house.title}</h2>
            </div>
          </Link>
          <button type="button" onClick={() => handleDelete(house.id)}>
            Delete House
          </button>
        </div>
      ))}
    </div>
  );
};

export default DeleteHouse;
