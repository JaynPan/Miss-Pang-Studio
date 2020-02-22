import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby"

import Head from "../components/head"
import Layout from "../components/layout"
import blogStyles from "./blog.module.scss"

export default function BlogPage() {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(fromNow: true)
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="Blog" />
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allContentfulBlogPost.edges.map((edge, i) => {
          const { title, slug, publishedDate } = edge.node
          return (
            <li key={`edge_${i}`} className={blogStyles.post}>
              <Link to={`/blog/${slug}`}>
                <h3>{title}</h3>
                <p>{publishedDate}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}
