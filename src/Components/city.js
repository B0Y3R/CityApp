import React from 'react'
import AttractionsList from './attractionslist';
import '../_Styles/city.css'

class City extends React.Component {
    render() {
        const {title, img, description} = this.props;
        return (
            <div className="city-card">
              <h3 className="city-title">{title}</h3>

                <div className="city-card-img">
                <img src={this.props.img} alt={title} /> 
                </div>

                <div className="card-content">
                  <p>{description}</p>

                  <h4>Attractions</h4>
                    <AttractionsList />

                </div>

            </div>

    )
    }
};

export default City;
