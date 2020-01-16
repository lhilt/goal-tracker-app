import React, { Component } from 'react';
import Navbar from './components/Navbar';
import Dashboard from './components/Dashboard';
import './App.scss';

class App extends Component<{}, {}> {
  state = {
    currentUser: '',
  }
  render() {
    const { currentUser } = this.state;
    return (
      <div className="App">
        <Navbar />
        <Dashboard username={currentUser} />
      </div>
    );
  }
}

export default App;
