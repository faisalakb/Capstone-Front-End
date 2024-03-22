import './App.css';
// eslint-disable-next-line import/no-extraneous-dependencies
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './features/home/home';
import Dashboard from './features/home/dashboard';
import HouseDetails from './features/house/components/houseDetails';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/house/:id" element={<HouseDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
