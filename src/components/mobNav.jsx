import React from "react"
import NavLinks from "./NavLinks.jsx"
import mobStyles from "./nav.module.css"
import axes from "../images/axes.png"

export default function Nav() {
  return (
    <>
      <div id="mobNav" className="navOverlay">
        {/* <button>&times;</button> */}
        <NavLinks />
      </div>

      <div className="mobFloat">
        <img
          src={axes}
          alt="crossed axes button"
          className={mobStyles.axeBtn}
          width="60"
          height="auto"
        />
      </div>
    </>
  )
}
