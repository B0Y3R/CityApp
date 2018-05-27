import React from 'react';
import Navbar from './Components/navbar';
import CityList from './Components/citylist';
import './CityApp.css';

class CityApp extends React.Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <CityList />
      </div>
    );
  }
}

export default CityApp;
