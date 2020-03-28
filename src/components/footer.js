import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import "./footer.scss"

export default function Footer() {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  return (
    <footer>
      <p>{`Copyright © 2020 ${data.site.siteMetadata.title}`}</p>
    </footer>
  )
}
