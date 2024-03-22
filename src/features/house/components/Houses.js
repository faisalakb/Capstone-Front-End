import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchAllHouses } from '../getHousesSlice';

const HouseList = () => {
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

  return (
    <div className="house-list">
      {houses.map((house) => (
        <Link key={house.id} to={`/houses/${house.id}`} className="house-card-link">
          <div className="house-card">
            <div className="house-photo">
              <img src={house.photo} alt={house.title} />
            </div>
            <div className="house-details">
              <h2>{house.title}</h2>
              <p>{house.description}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HouseList;
