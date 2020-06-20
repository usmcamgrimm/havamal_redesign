import React from "react"
import { Link } from "gatsby"

const NavLinks = () => {
  return (
    <>
      <Link to="/">Home</Link>
      <Link to="../../pages/music/">Music</Link>
      <Link to="../../pages/about/">About</Link>
      <Link to="../../pages/contact/">Contact</Link>
    </>
  )
}

export default NavLinks
