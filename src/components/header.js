import React, { useState, useContext } from "react"
import { Link, graphql, useStaticQuery } from "gatsby"

import MisspangLogo from "../images/misspang_signature.png"
import InstagramIcon from "./instagram_icon"
import FacebookIcon from "./facebook_icon"
import YoutubeIcon from "./youtube_icon"
import banner from "../images/white-flowers.jpg"
import {
  GlobalDispatchContext,
  GlobalStateContext,
} from "../context/GlobalContextProvider"
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

  const dispatch = useContext(GlobalDispatchContext)
  const state = useContext(GlobalStateContext)
  console.log(state)
  console.log(dispatch)

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
    <header style={{ backgroundImage: `url(${banner})`, height: "75vh" }}>
      <div id="navbar" className={`${shouldSticky ? "sticky" : ""}`}>
        <div className="header-container">
          <nav>
            <div className="logo">
              <Link to="/">
                <img src={MisspangLogo} alt={data.site.siteMetadata.author} />
              </Link>
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
                    <Link to="/work" activeClassName="current-page">
                      Works
                    </Link>
                  </li>
                  <li className="nav-list-item">
                    <Link to="/" activeClassName="current-page">
                      Gallery
                    </Link>
                  </li>
                  <li className="nav-list-item">
                    <Link to="/" activeClassName="current-page">
                      Blog
                    </Link>
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
