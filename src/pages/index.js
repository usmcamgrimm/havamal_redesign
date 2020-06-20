import React from "react"
import Nav from "../components/nav"
import MobNav from "../components/mobNav"
import Navbar from "../components/Navbar/Navbar"
import Container from "../components/container"
import havamal from "../images/havamal_bg.png"
import "../styles/global.css"

export default () => {
  return (
    <>
      <Nav />
      <MobNav />
      <Navbar />
      <Container>
        <img src={havamal} className="logo" alt="Havamal band logo" />
        <h1>Hail, Hordes of Havamal!</h1>
      </Container>
    </>
  )
}
