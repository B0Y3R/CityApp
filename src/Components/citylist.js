import React from 'react';
import City from './city';
import img from '../_Styles/img/newyork.jpg';
import '../_Styles/citylist.css'

class CityList extends React.Component {
    static defaultProps = {
        Cities: [
            {
                title: "New York City",
                img: img,
                description: "THE BIG CITY",
                attractions: ["", "", ""]
            },
            {
                title: "Seattle",
                img: img,
                description: "THE BIG CITY",
                attractions: ["", "", ""]
            },
            {
                title: "Portland",
                img: img,
                description: "THE BIG CITY",
                attractions: ["", "", ""]
            }
        ]
    }
    render() {
        return (
            <div className="city-list">
                {this.props.Cities.map((c, index) => (
                  <City key={index} {...c} />  
                ))}
            </div>
        )
    }
}

export default CityList;