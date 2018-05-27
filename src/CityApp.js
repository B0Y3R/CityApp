import React from 'react';
import CityList from './Components/citylist';
import './CityApp.css';

class CityApp extends React.Component {
  render() {
    return (
      <div className="App">
        <CityList />
      </div>
    );
  }
}

export default CityApp;
