import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logoutUser } from '../user/loginUserSlice';
import HouseList from '../house/components/Houses';
import Hamburger from '../../assets/menu.png';
import CloseButton from '../../assets/close.png';

const Dashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const handleLogout = () => {
    dispatch(logoutUser());
    navigate('/');
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="static flex flex-col h-screen items-center">
      {/* Navigation bar (desktop view) */}
      <nav className="hidden lg:flex bg-gray-800 text-white px-4 py-2">
        <ul className="flex space-x-4">
          <li>
            <a href="/dashboard" className="hover:text-gray-400">
              Houses
            </a>
          </li>
          <li>
            <a href="/add" className="hover:text-gray-400">
              Add house
            </a>
          </li>
          <li>
            <a href="/delete" className="hover:text-gray-400">
              Delete a house
            </a>
          </li>
          <li>
            <a href="/favorites" className="hover:text-gray-400">
              My Favorites
            </a>
          </li>
        </ul>
        <button
          type="button"
          onClick={handleLogout}
          className="ml-auto text-white hover:text-gray-400"
        >
          Logout
        </button>
      </nav>

      {/* Mobile menu (toggles on smaller screens) */}
      <div
        className={`lg:hidden fixed top-0 left-0 h-screen z-50 overflow-auto bg-white shadow-lg ${
          isMobileMenuOpen ? 'w-1/2' : 'w-0'
        } transition-all duration-300 ease-in-out`}
      >
        <button
          type="button"
          onClick={closeMobileMenu}
          className="absolute top-4 right-4"
        >
          <img src={CloseButton} alt="Close Menu" className="w-8 h-8" />
        </button>
        <ul className="p-4">
          <li>
            <a href="/dashboard" className="hover:text-gray-400 block mb-2">
              Houses
            </a>
          </li>
          <li>
            <a href="/add" className="hover:text-gray-400 block mb-2">
              Add house
            </a>
          </li>
          <li>
            <a href="/delete" className="hover:text-gray-400 block mb-2">
              Delete a house
            </a>
          </li>
          <li>
            <a href="/favorites" className="hover:text-gray-400 block mb-2">
              My Favorites
            </a>
          </li>
        </ul>
      </div>

      {/* Hamburger menu button (on smaller screens) */}
      <button
        type="button"
        onClick={toggleMobileMenu}
        className={`lg:hidden fixed top-4 left-4 ${
          isMobileMenuOpen ? 'hidden' : ''
        }`}
      >
        <img src={Hamburger} alt="Open Menu" className="w-8 h-8" />
      </button>

      <h2 className="lg:hidden absolute top-3 text-2xl">Houses</h2>

      <div className="flex-grow px-4 py-4 mt-10">
        <HouseList />
      </div>
    </div>
  );
};

export default Dashboard;
