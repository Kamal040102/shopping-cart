import React from 'react';
import { Link } from 'react-router-dom'
import './style/navbar.css'

 const Navbar = ()=>{
    return(
            <nav className="nav-wrapper">
                <div className="container">
                    <Link to="/" className="brand-logo">GamesKart</Link>
                    
                    <ul className="right">
                        <li><Link className="rightItem" to="/">Shop</Link></li>
                        <li><Link className="rightItem" to="/cart">My cart</Link></li>
                        <li><Link to="/cart"><i className="material-icons">shopping_cart</i></Link></li>
                    </ul>
                </div>
            </nav>
    )
}

export default Navbar;