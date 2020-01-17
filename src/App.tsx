import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import './App.scss';

const App: React.FC = () => {
  const [currentUser] = useState('');
  return (
    <div className="App">
      <Navbar />
      <Dashboard username={currentUser} />
    </div>
  );
}

export default App;
