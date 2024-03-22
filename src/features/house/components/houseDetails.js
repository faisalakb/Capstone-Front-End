// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';

const HouseDetails = ({ house }) => (
  <div className="house-details-fullscreen">
    <h2>{house.title}</h2>
    <img src={house.photo} alt={house.title} />
    <p>{house.description}</p>
    <button type="button">Add to Favorite</button>
    {' '}
    {/* Add functionality later */}
  </div>
);

HouseDetails.propTypes = {
  house: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    photo: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }).isRequired,
};

export default HouseDetails;
