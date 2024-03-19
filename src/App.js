import './App.css';
import RegistrationForm from './features/user/components/registerUser';
import LoginForm from './features/user/components/loginUser';
import House from './features/House';

function App() {
  return (
    <div className="App">
      <LoginForm />
      <House />
      <RegistrationForm />
    </div>
  );
}

export default App;
