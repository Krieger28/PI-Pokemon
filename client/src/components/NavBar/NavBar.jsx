import React from "react";
import {Link} from "react-router-dom";
import './NavBar.css'

export default function NavBar() {
    return (
        <nav className="Nav">
            <ul className="ulNav">
                <li className="liNav"><Link className="linkCss" to='/Home'>Home</Link></li>
                <li className="liNav"><Link className="linkCss" to='/Create'>Create Pokemon</Link></li>
            </ul>
        </nav>
    )
}