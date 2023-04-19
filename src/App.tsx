import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import SelectedPage from './shared/types';

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
    <div className="app bg-gray-10">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        isTopOfPage={isTopOfPage}
      />
      <div className="mx-auto mt-10 flex flex-col justify-center">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          voluptas, doloremque quaerat autem dolorem, quibusdam laudantium
          facere corporis, odio sit blanditiis officiis exercitationem adipisci!
          Culpa voluptatibus ducimus atque vitae velit?
        </p>
      </div>
    </div>
  );
}

export default App;
