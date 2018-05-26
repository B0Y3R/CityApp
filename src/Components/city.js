import React from 'react'

class City extends React.Component {
    render() {
        const {title} = this.props;
        const attractions = this.props.attractions.map((att, index) => (
            <li key={index}>{att}</li>

        ));
        return (
            <div>
              <div>CITY {title}</div>
                <ul>
                    {attractions}
                </ul>
            </div>

    )
    }
};

export default City;
