import { useSelector } from 'react-redux';
import Details from './components/Details';
import Navbar from './components/Navbar';
import './output.css';

function App() {
  const redux = useSelector(state => state.counter)
  return (
    <div className={`App h-screen ${redux.darkMode ? 'bg-gray-800 text-white' : 'bg-[#fefefe]'}`}>
      <Navbar />
      <Details />
    </div>
  );
}

export default App;
