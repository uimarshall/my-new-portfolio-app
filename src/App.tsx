import { useState } from 'react';
import './App.css';
import Navbar from './components/layout/Navbar';
import SelectedPage from './shared/types';

function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(
    SelectedPage.Intro
  );
  return (
    <div className="app bg-gray-10">
      <Navbar selectedPage={selectedPage} setSelectedPage={setSelectedPage} />
      <h1 className="text-3xl font-bold underline">My Portfolio!</h1>
    </div>
  );
}

export default App;
