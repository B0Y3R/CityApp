import React from 'react';
import '../_Styles/navbar.css';

class Navbar extends React.Component {
    render() {
        return (
            <header>
                <div className="title">City InfoCard</div>
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