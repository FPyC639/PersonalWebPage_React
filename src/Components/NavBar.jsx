import React from "react"
import { Navbar, NavLink } from "react-router-dom"
import "./NavBar.css"

function NavBar() {
    return <>

        <nav className="navbar">
            <div className="nav-container">
                <NavLink exact to="/AboutMe" className="nav-logo">
                    About Me
                </NavLink>

                <NavLink exact to="/" className="nav-logo">
                    Main Page
                </NavLink>

                <ul className="nav-menu">

                    <li className="nav-item">
                        <NavLink exact to="/Resume" activeClassName="active" className="nav-links">
                            Resume
                        </NavLink>
                    </li>
                    {/*<li className="nav-item">*/}
                    {/*    <NavLink exact to="/Vaccine" activeClassName="active" className="nav-links">*/}
                    {/*        Projects*/}
                    {/*    </NavLink>*/}
                    {/*</li>*/}
                </ul>


            </div>
        </nav>

    </>;


}

export default NavBar;
