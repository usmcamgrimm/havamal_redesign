import React from "react"
import Nav from "../components/nav"
import Header from "../components/header"
import "../styles/global.css"

export default () => {
  return (
    <>
      <Nav />
      <Header headerText="Hail, Hordes of Havamal!" />
    </>
  )
}
