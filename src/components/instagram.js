import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import Carousel from "@brainhubeu/react-carousel"
import { FontAwesomeIcon as Icon } from "@fortawesome/react-fontawesome"
import { faAngleRight, faAngleLeft } from "@fortawesome/free-solid-svg-icons"
import "@brainhubeu/react-carousel/lib/style.css"

import "./instagram.scss"
import InstagramIcon from "./instagram_icon"

export default function Instagram() {
  const data = useStaticQuery(graphql`
    query {
      allInstagramContent(limit: 12) {
        edges {
          node {
            link
            localImage {
              childImageSharp {
                fluid(maxHeight: 500, maxWidth: 500, quality: 90) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
            images {
              standard_resolution {
                url
              }
            }
          }
        }
      }
    }
  `)

  return (
    <div className="instagram-carousel-container">
      <h3 style={{ textAlign: "center", fontSize: "1.5rem" }}>
        <a href="https://www.instagram.com/misspang_studio/">
          <InstagramIcon />
          {"  "}Instagram
        </a>
      </h3>
      <Carousel
        arrowLeft={<Icon icon={faAngleLeft} style={{ marginRight: "20px" }} />}
        arrowRight={<Icon icon={faAngleRight} style={{ marginLeft: "20px" }} />}
        addArrowClickHandler
        slidesPerPage={6}
        infinite
        autoPlay={3000}
        animationSpeed={1000}
      >
        {data.allInstagramContent.edges.map(
          (edge, i) =>
            edge.node.localImage && (
              <div key={i} className="img-wrapper">
                <a
                  href={edge.node.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image fluid={edge.node.localImage.childImageSharp.fluid} />
                </a>
              </div>
            )
        )}
      </Carousel>
    </div>
  )
}
