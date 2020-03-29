import React from 'react'

import './feature-work.scss'

import storyImg from "../images/holding-flower.jpg"

export default function FeatureWork() {
  return (
    <section className="features-section">
      <div className="features-inner-section">
        <h3 style={{fontSize: "2rem", textAlign: "center"}}>接案合作</h3>
        <div className="feature">
          <div className="feature-info">
            <h4>插畫設計</h4>
            <p>否市子臺講時作傳自加。一自國們自麼未……們上神經畫；常的著痛步企時世李再們率你的懷現。</p>
            <a href="./work" className="feature-btn">案例分享</a>
          </div>
          <div className="feature-image">
          </div>
        </div>
        <div className="feature">
          <div className="feature-info">
            <h4>海報、DM、名片設計</h4>
            <p>否市子臺講時作傳自加。一自國們自麼未……們上神經畫；常的著痛步企時世李再們率你的懷現。</p>
            <a href="./work" className="feature-btn">案例分享</a>
          </div>
          <div className="feature-image">
          </div>
        </div>
        <div className="feature">
          <div className="feature-info">
            <h4>LOGO設計</h4>
            <p>否市子臺講時作傳自加。一自國們自麼未……們上神經畫；常的著痛步企時世李再們率你的懷現。</p>
            <a href="./work" className="feature-btn">案例分享</a>
          </div>
          <div className="feature-image">
          </div>
        </div>
      </div>
    </section>
  )
}