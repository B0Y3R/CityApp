import React from 'react';
import CityList from './citylist'
import '../_Styles/attractionslist.css';

class AttractionsList extends React.Component {

    render() {
        return(
            <ul>
              {this.props.attractions.map((att, index) => (
                <li key={index}>{att}</li>  
              ))}
            </ul>
        );
    }
}

export default AttractionsList;