import React, { useState } from "react"
import NavLinks from "./NavLinks"
import styled from "styled-components"
import "../../images/axes.png"

const Navigation = styled.nav`
  background-color: rgb(0, 85, 155);
  height: 8vh;
  display: flex;
  position: relative;
  justify-content: space-between;
  margin: 0 auto;
  padding: 0 5vw;
  z-index: 2;
  align-self: center;

  @media screen and (max-width: 768px) {
    position: sticky;
    height: 8vh;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`
const Toggle = styled.div`
  display: none;
  height: 100%;
  cursor: pointer;
  padding: 0 10vw;

  @media screen and (max-width: 768px) {
    display: flex;
  }
`
const Navbox = styled.div`
  display: flex;
  height: 100%;
  justify-content: flex-end;
  align-items: center;

  @media screen and (max-width: 768px) {
    flex-direction: column;
    position: fixed;
    width: 100%;
    justify-content: flex-start;
    padding-top: 15vh;
    background-color: rgba(0, 85, 155, 0.7);
    transition: all 0.3s ease-in;
    top: 8vh;
    left: ${props => (props.open ? "-100%" : "0")};
  }
`
const Switch = styled.div`
  bakground-image: url("../../images/axes.png");
  max-width: 96px;
  height: auto;
  align-self: center;
  position: relative;

  @media screen and (min-width: 769px) {
    display: none;
  }
`

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false)

  return (
    <Navigation>
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Switch open /> : <Switch />}
      </Toggle>
      {navbarOpen ? (
        <navbox>
          <NavLinks />
        </navbox>
      ) : (
        <Navbox open>
          <NavLinks />
        </Navbox>
      )}
    </Navigation>
  )
}

export default Navbar
