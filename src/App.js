import Details from './components/Details';
import Navbar from './components/Navbar';
import './output.css';
import { useState, useEffect, createContext } from 'react';

export const Needs = createContext();

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isSidebarVisible, setIsSidebarVisible] = useState(true);
  const [visible, setVisible] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode ? 'true' : 'false');
  };

  const toggleSidebar = () => {
    setIsSidebarVisible(!isSidebarVisible);
  }

  useEffect(() => {
    const isDarkMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(isDarkMode);
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, []);

  const toggleVisible = ()=>{
    setVisible(!visible);
  }
  const props = {
    toggleSidebar: toggleSidebar,
    toggleDarkMode: toggleDarkMode,
    darkMode: darkMode,
    isSidebarVisible: isSidebarVisible,
    visible: visible,
    toggleVisible: toggleVisible
  }
  return (
    <Needs.Provider value={props} className={`App`}>
      <Navbar />
      <Details />
    </Needs.Provider>
  );
}

export default App;
