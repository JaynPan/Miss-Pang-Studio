import React from "react"

import Header from "./header"
import Footer from "./footer"
import Instagram from "./instagram"
import headerStyles from "./layout.module.scss"
import "../styles/normalize.scss"

export default function Layout(props) {
  return (
    <div className={headerStyles.container}>
      <div className={headerStyles.content}>
        <Header />
        {props.children}
      </div>
      <Instagram />
      <Footer />
    </div>
  )
}
