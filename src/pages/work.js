import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"
import Image from "gatsby-image"

import Head from "../components/head"
import Layout from "../components/layout"
import { GlobalDispatchContext } from "../context/GlobalContextProvider"
import "./work.scss"

export default function Work() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulWork {
        edges {
          node {
            title
            slug
            cover {
              fluid(maxHeight: 360, maxWidth: 360, quality: 90) {
                ...GatsbyContentfulFluid_withWebp
              }
            }
            excerpt
            category
          }
        }
      }
    }
  `)
  const works = data.allContentfulWork.edges
  const dispatch = React.useContext(GlobalDispatchContext)
  const [type, setType] = React.useState("")
  const [categories, setCategories] = React.useState()

  React.useEffect(() => {
    dispatch({ type: "PAGE_NAME", page: "works" })

    // store all unique categories
    let uniqueCat = []
    data.allContentfulWork.edges.forEach(({ node }) => {
      if (node.category && !uniqueCat.includes(node.category)) {
        uniqueCat.push(node.category)
      }
    })
    setCategories(uniqueCat)
  }, [data, data.allContentfulWork.edges.node, dispatch])

  return (
    <Layout>
      <Head title="Work" />
      <section>
        <div className="work-inner-container">
          <aside className="categories">
            <button
              className={`filter-btn link-button ${!type ? "current" : ""}`}
              onClick={() => setType("")}
            >
              ALL
            </button>
            {categories &&
              categories.map((cat, i) => (
                <button
                  key={`cat_link_${i}`}
                  className={`filter-btn link-button ${
                    type === cat ? "current" : ""
                  }`}
                  onClick={() => setType(cat)}
                >
                  {cat}
                </button>
              ))}
          </aside>
          <main className="works">
            {works &&
              works
                .filter(({ node }) => {
                  if (!type) return true

                  return type === node.category
                })
                .map(({ node }, i) => (
                  <div className="work" key={i}>
                    <h2 className="work-title">{node.title}</h2>
                    <p className="work-info">{node.category}</p>
                    <div className="img">
                      <Image fluid={node.cover.fluid} />
                    </div>
                    <p className="work-body">{node.excerpt}</p>
                    <Link to={`/work/${node.slug}`} className="work-read-more">
                      Continue Reading
                    </Link>
                  </div>
                ))}
          </main>
        </div>
      </section>
    </Layout>
  )
}
