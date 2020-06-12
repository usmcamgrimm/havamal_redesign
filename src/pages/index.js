import React from "react"
import Nav from "../components/nav"
import Header from "../components/header"
import Container from "../components/container"
import havamal from "../images/havamal_bg.png"
import "../styles/global.css"

export default () => {
  return (
    <>
      <Nav />
      <Container>
        <img src={havamal} className="logo" alt="Havamal band logo" />
      </Container>
      <h1>Hail, Hordes of Havamal!</h1>
    </>
  )
}
