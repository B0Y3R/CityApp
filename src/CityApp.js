import React from 'react';
import City from './Components/city';
import './CityApp.css';
import newyork from './_Styles/img/newyork.jpg';

class CityApp extends React.Component {
  render() {
    return (
      <div className="App">
        <City title="New York" 
        attractions = {['Effile Tower', 'Statue of Liberty']}
        description="The most city"
        img={newyork} />
      </div>
    );
  }
}

export default CityApp;
