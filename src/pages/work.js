import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

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
              fluid {
                src
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

  React.useEffect(() => {
    dispatch({ type: "PAGE_NAME", page: "works" })
  }, [])

  return (
    <Layout>
      <Head title="Work" />
      <section>
        <div className="work-inner-container">
          <aside className="categories">
            <h3>Category</h3>
            <a className="filter-btn" onClick={() => setType("")}>
              ALL
            </a>
            <a className="filter-btn" onClick={() => setType("插畫設計")}>
              插畫設計
            </a>
            <a className="filter-btn" onClick={() => setType("名片設計")}>
              名片設計
            </a>
          </aside>
          <main className="works">
            {works
              .filter(({ node }) => {
                if (!type) return true

                return type === node.category
              })
              .map(({ node }, i) => (
                <div className="work" key={i}>
                  <h2 className="work-title">{node.title}</h2>
                  <p className="work-info">{node.category}</p>
                  <div className="img">
                    <img src={`https:${node.cover.fluid.src}`} />
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
