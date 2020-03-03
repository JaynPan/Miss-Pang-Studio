import React from "react"

import Header from "./header"
import Footer from "./footer"
import Instagram from "./instagram"
import contentStyles from "./layout.module.scss"
import "../styles/normalize.scss"

export default function Layout(props) {
  return (
    <div className={contentStyles.container}>
      <div className={contentStyles.content}>
        <Header />
        {props.children}
      </div>
      <Instagram />
      <Footer />
    </div>
  )
}
