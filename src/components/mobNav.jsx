import React, { useState } from "react"
import NavLinks from "./NavLinks.jsx"
import mobStyles from "./nav.module.css"
import axes from "../images/axes.png"
import styled from "styled-components"

const NavOverlay = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 10vh;
    background-color: #fff;
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`

const MobNav = () => {
  const [navOpen, setNavOpen] = useState(false)

  return (
    <div className="mobFloat">
      <img
        src={axes}
        alt="crossed axes button"
        className={mobStyles.axeBtn}
        width="60"
        height="auto"
        navopen={navOpen}
        onClick={() => setNavOpen(!navOpen)}
      >
        {navOpen}
      </img>
      {navOpen ? (
        <NavOverlay>
          <NavLinks />
        </NavOverlay>
      ) : (
        <NavOverlay open>
          <NavLinks />
        </NavOverlay>
      )}
    </div>
  )
}

export default MobNav
