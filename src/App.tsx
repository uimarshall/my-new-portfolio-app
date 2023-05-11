/* eslint-disable jsx-a11y/label-has-associated-control */
import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import SelectedPage from './shared/types';
import Home from './components/pages/Home';
import Portfolio from './components/pages/Portfolio';

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Intro
  );

  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage(SelectedPage.Intro);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="app bg-gray-10">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <Home setSelectedPage={setSelectedPage} />
      <Portfolio setSelectedPage={setSelectedPage} />
    </main>
  );
}

export default App;
