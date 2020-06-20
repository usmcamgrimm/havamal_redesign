import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"

const Logo = () => {
  const data = useStaticQuery(graphql`
    query {
      file(name: { eq: "axes" }, extension: { eq: "png" }) {
        childImageSharp {
          fluid(maxWidth: 108, pngQuality: 80) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return <Img fluid={data.file.childImageSharp.fluid} alt="logo" />
}

export default Logo
