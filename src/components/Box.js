import React from "react"

import storyImg from "../images/holding-flower.jpg"
import "./box.scss"

export default function Box() {
  return (
    <section className="banner-below-story">
      <div className="story-container slider">
        <img src={storyImg} alt="story" />
      </div>

      <div className="story-container info">
        <h3>
          用感性 做
          <br />
          理性設計
          <br />
        </h3>
        <a href="/" className="main-button">
          Blog
        </a>
      </div>
    </section>
  )
}
