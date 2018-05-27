import React from 'react';
import '../_Styles/attractionslist.css';

class AttractionsList extends React.Component {
    static defaultProps = {
        attractions: []
    }

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