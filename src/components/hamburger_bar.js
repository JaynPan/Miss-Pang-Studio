import React, { useState } from "react"

import "./hamburgerbar.scss"

export default function HamburgerBar(props) {
  const [animate, setAnimate] = useState(false)
  const handleAnimate = () => {
    props.handleMenuExpend(!animate)
    setAnimate(!animate)
  }

  return (
    <button className="hamburger-menu" onClick={handleAnimate}>
      <span className="hamburger-menu-content">
        <span className="sr-only"></span>
        <span className={`bar ${animate ? "animate" : ""}`}></span>
      </span>
    </button>
  )
}
