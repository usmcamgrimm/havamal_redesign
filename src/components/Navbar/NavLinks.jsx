import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const NavItem = styled(Link)`
  text-decoration: none;
  color: rgb(255, 206, 0);
  display: inline-block;
  margin: 0 1vw;
  font-family: Mirza;
  font-size: 2rem;

  :hover {
    transform: scale(1.15);
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.7);
  }

  @media screen and (max-width: 768px) {
    padding: 20px 0;
    font-size: 1.5rem;
    z-index: 6;
  }
`

const NavLinks = () => {
  return (
    <>
      <NavItem to="/">Home</NavItem>
      <NavItem to="../../music/">Music</NavItem>
      <NavItem to="../../about/">About</NavItem>
      <NavItem to="../../contact/">Contact</NavItem>
    </>
  )
}

export default NavLinks
