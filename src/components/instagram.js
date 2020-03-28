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
        arrowLeft={<Icon icon={faAngleLeft} style={{ margin: "0 20px" }} />}
        arrowRight={<Icon icon={faAngleRight} style={{ margin: "0 20px" }} />}
        addArrowClickHandler
        slidesPerPage={6}
        infinite
        autoPlay={3000}
        animationSpeed={1000}
        keepDirectionWhenDragging
        breakpoints={{
          1000: {
            slidesPerPage: 4,
            slidesPerScroll: 4,
            clickToChange: false,
          },
          500: {
            slidesPerPage: 3,
            slidesPerScroll: 3,
            clickToChange: false,
            animationSpeed: 2000,
          },
        }}
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
