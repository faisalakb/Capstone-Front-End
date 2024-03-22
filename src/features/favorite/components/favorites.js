import React, { useEffect, useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import axios from 'axios';

const Favorites = () => {
  const [favorites, setFavorites] = useState([]);
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios.get('http://localhost:3001/favorites', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
      .then((response) => {
        setFavorites(response.data);
      })
      .catch((error) => {
        // eslint-disable-next-line no-console
        console.error(error);
      });
  }, [token]);

  return (
    <div>
      <h1>Favorites</h1>
      <ul>
        {favorites.map((favorite) => (
          <li key={favorite.id}>
            <h2>{favorite.title}</h2>
            <p>{favorite.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Favorites;
