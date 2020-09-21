import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import logo from '../logo.svg';
import { UpdateContext } from './Context';

export default function Navbar() {
    const {unShowInformation} = useContext(UpdateContext);
    return (
        <nav className="nav-bar">
            <ul className="nav-links">
                <li className="nav-link" onClick={() => unShowInformation()}>
                    <Link to="/" className="link">
                        <img src={logo} alt="" className="image"></img>
                    </Link>
                </li>
                <li className="nav-link" onClick={() => unShowInformation()}>
                    <Link to="/" className="link">
                        Product
                    </Link>
                </li>
                <li className="nav-link">
                    <Link to="/cart" className="link" onClick={() => unShowInformation()}>
                        Cart
                    </Link>
                </li>
            </ul>
        </nav>
    )
}
