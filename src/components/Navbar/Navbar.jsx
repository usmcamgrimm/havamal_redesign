import React, { useState } from "react"
import NavLinks from "./NavLinks"
import Logo from "./Logo"
import styled from "styled-components"

const Navigation = styled.nav``
const Toggle = styled.div``
const Navbox = styled.div``
const Axes = styled.div``

const Navbar = () => {
  const [NavbarOpen, setNavbarOpen] = useState(false)

  return (
    <Navigation>
      <Logo />
      <Toggle
        navbarOpen={navbarOpen}
        onClick={() => setNavbarOpen(!navbarOpen)}
      >
        {navbarOpen ? <Axes open /> : <Axes />}
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
