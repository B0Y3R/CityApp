import React from 'react';
import PropTypes from 'prop-types';
import '../_Styles/city.css';

class City extends React.Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        attractions: PropTypes.arrayOf(PropTypes.string).isRequired,
        description: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
    }
    render() {
        const {title, img, description} = this.props;
        const attractions = this.props.attractions.map((att, index) => (
            <li key={index}> {att} </li>
        ));

        return (
            <div className="city-card">
              <h2 className="city-title">{title}</h2>

                <div className="city-card-img">
                <img src={img} alt={title} /> 
                </div>

                <div className="card-content">
                  <p>"{description}"</p>
                    <hr />
                  <h3>Attractions</h3>
                  
                    <div className="att-list">{ attractions }</div>

                </div>

            </div>

    )
    }
};

export default City;
