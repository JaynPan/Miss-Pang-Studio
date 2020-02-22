import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';
import Carousel from '@brainhubeu/react-carousel';
import { FontAwesomeIcon  as Icon } from '@fortawesome/react-fontawesome'
import { faAngleRight, faAngleLeft } from '@fortawesome/free-solid-svg-icons'
import '@brainhubeu/react-carousel/lib/style.css';

import instagramStyles from './instagram.module.scss';

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


  return(
    <div>
      <h3 style={{ textAlign: 'center' }}>Instagram Feed</h3>
      <Carousel
        arrowLeft={<Icon icon={faAngleLeft} />}
        arrowRight={<Icon icon={faAngleRight} />}
        addArrowClickHandler
        slidesPerPage={4}
        centered
        infinite
        autoPlay={3000}
        animationSpeed={1000}
      >
        {
          data.allInstagramContent.edges.map((edge, i) => (
            edge.node.localImage && (
              <div key={i} className={instagramStyles.imgWrapper}>
                <a href={edge.node.link} target='_blank' rel="noopener noreferrer">
                  <Image
                    fluid={edge.node.localImage.childImageSharp.fluid}
                  />
                </a>
              </div>
            )
          ))
        }
      </Carousel>
    </div>
  )
}