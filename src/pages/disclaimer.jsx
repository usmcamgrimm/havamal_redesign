import React from "react"
import Nav from "../components/nav"
import Header from "../components/header"

export default function Disclaimer() {
  return (
    <div>
      <Nav />
      <Header headerText="Disclaimer" />
      <p>
        This page is not affiliated with or run by Havamal or Art Gates Records.
        All images and music are the property of Havamal.
      </p>
    </div>
  )
}
