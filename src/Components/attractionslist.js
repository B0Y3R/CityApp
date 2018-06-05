import React from 'react';
import '../_Styles/attractionslist.css';

class AttractionsList extends React.Component {
    static defaultProps = {
        attractions: []
    }

    render() {
        const attractions = this.props.attractions.map((att, index) => (
            <li> key={index}{att} </li>
        ));
        return(
            <ul>
                {attractions}  
            </ul>
        );
    }
}

export default AttractionsList;