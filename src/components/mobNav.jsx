import React from "react"
import { Link } from "gatsby"
import "./nav.module.css"
import axes from "../images/axes.png"

export default function Nav() {
  return (
    <>
      <div id="mobNav" className="navOverlay">
        {/* <button>&times;</button> */}
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
      </div>

      <div className="mobFloat">
        <img
          src={axes}
          alt="crossed axes button"
          className="axeBtn"
          width="60"
          height="auto"
        />
      </div>
    </>
  )
}
