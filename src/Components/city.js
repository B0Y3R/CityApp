import React from 'react'
import '../_Styles/city.css'

class City extends React.Component {
    render() {
        const {title, img, description} = this.props;
        const attractions = this.props.attractions.map((att, index) => (
            <li key={index}>{att}</li>

        ));
        return (
            <div className="city-card">
              <h3 className="city-title">{title}</h3>

                <div className="city-card-img">
                <img src={img} alt={title} /> 
                </div>

                <div className="card-content">
                  <p>{description}</p>

                  <h4>Attractions</h4>
                    <ul>
                      {attractions}
                    </ul>

                </div>

            </div>

    )
    }
};

export default City;
