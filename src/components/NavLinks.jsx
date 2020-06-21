import React from "react"
import { Link } from "gatsby"
import "./nav.module.css"

const NavLinks = () => {
  return (
    <>
      <div className="navContent">
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/music/">Music</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/contact/">Contact</Link>
            </li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default NavLinks
