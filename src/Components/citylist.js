import React from 'react';
import City from './city';
import PropTypes from 'prop-types'
import img1 from '../_Styles/img/newyork.jpg';
import img2 from '../_Styles/img/portland.jpg';
import img3 from '../_Styles/img/seattle.jpg';
import '../_Styles/citylist.css'

class CityList extends React.Component {
    static defaultProps = {
        Cities: [
            {
                title: "New York City",
                img: img1,
                description: "THE BIG CITY",
                attractions: ["Times Square", "The Statue Of Liberty", "Wall Street"]
            },
            {
                title: "Seattle",
                img: img3,
                description: "Birth Place of Starbucks",
                attractions: ["Space Needle", "OG Starbucks", "Pike Place Market"]
            },
            {
                title: "Portland",
                img: img2,
                description: "rip city",
                attractions: ["Japanese Garden", "Washington Park", "Pittock Mansion"]
            }
        ]
    }

    static propTypes = {
        recipes: PropTypes.arrayOf(PropTypes.object).isRequired
    }

    render() {
        const Cities = this.props.Cities.map((c, index) => (
            <City key={index}{...c} />
        ));
        return (
            <div className="city-list">
                {Cities}
            </div>
        )
    }
}

export default CityList;