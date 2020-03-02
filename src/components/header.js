import React, { useState } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import MisspangLogo from "../images/misspang_signature.png"
import InstagramIcon from "./instagram_icon"
import FacebookIcon from "./facebook_icon"
import YoutubeIcon from "./youtube_icon"
import "./header.scss"

export default function Header() {
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

  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false)
  const [shouldSticky, setShoudSticky] = useState(false)
  const toggleNav = () => {
    if (isMobileNavOpen) {
      setIsMobileNavOpen(false)
    } else {
      setIsMobileNavOpen(true)
    }
  }

  window.onscroll = function() {
    if (window.pageYOffset > 0) {
      setShoudSticky(true)
    } else {
      setShoudSticky(false)
    }
  }

  return (
    <header>
      <div id="navbar" className={`${shouldSticky ? "sticky" : ""}`}>
        <div className="header-container">
          <nav>
            <div className="logo">
              <img src={MisspangLogo} alt={data.site.siteMetadata.author} />
            </div>
            <div className={`navigation ${isMobileNavOpen ? "active" : ""}`}>
              <div className="overlay close-icon" onClick={toggleNav}>
                &times;
              </div>
              <div className="overlay-content">
                <div className="overlay-nav-logo">
                  <img src={MisspangLogo} alt={data.site.siteMetadata.author} />
                </div>
                <ul className="nav-list">
                  <li className="nav-list-item">
                    <Link to="/about">About</Link>
                  </li>
                  <li className="nav-list-item">
                    <Link to="/about">Service</Link>
                  </li>
                  <li className="nav-list-item">
                    <Link to="/about">Works</Link>
                  </li>
                  <li className="nav-list-item">
                    <Link to="/about">Blog</Link>
                  </li>
                </ul>
                <ul className="social-media-list">
                  <li className="social-media-list-item">
                    <a href="/">
                      <InstagramIcon />
                    </a>
                  </li>
                  <li className="social-media-list-item">
                    <a href="/">
                      <FacebookIcon />
                    </a>
                  </li>
                  <li className="social-media-list-item">
                    <a href="/">
                      <YoutubeIcon />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <span className="hamburger" onClick={toggleNav}>
              &#9776;
            </span>
          </nav>
        </div>
      </div>
    </header>
  )
}
