import React from 'react';
import '../_Styles/navbar.css';

class Navbar extends React.Component {
    render() {
        return (
            <header>
                <h2 className="title">City InfoCard</h2>
                <nav>
                    <ul>
                        <li><a>New City</a></li>
                        <li><a>Home</a></li>
                        <li><a>About</a></li>
                        <li><a>Contact Us</a></li>
                    </ul>
                </nav>
            </header>
        );
    }
}
export default Navbar;