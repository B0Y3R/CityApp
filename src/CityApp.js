import React from 'react';
import City from './Components/city';
import './CityApp.css';

class CityApp extends React.Component {
  render() {
    return (
      <div className="App">
        <City title="New York" attractions = {['Effile Tower', 'Statue of Liberty']} />
      </div>
    );
  }
}

export default CityApp;
