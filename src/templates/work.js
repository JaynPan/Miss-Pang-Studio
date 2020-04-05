import React from "react"
import { graphql } from "gatsby"
import RichTextRenderer from "../components/contentful_rich_text_renderer"

import { GlobalDispatchContext } from "../context/GlobalContextProvider"
import Layout from "../components/layout"
import Head from "../components/head"
import "./work.scss"

export const query = graphql`
  query($slug: String!) {
    contentfulWork(slug: { eq: $slug }) {
      title
      content {
        json
      }
    }
  }
`

export default function Work(props) {
  const { title, content } = props.data.contentfulWork
  const dispatch = React.useContext(GlobalDispatchContext)

  React.useEffect(() => {
    dispatch({ type: "PAGE_NAME", page: "work" })
  }, [dispatch])

  return (
    <Layout>
      <Head title={title} />
      <article className="work-article">
        <h1 className="title">{title}</h1>
        <RichTextRenderer richTextJson={content.json} />
      </article>
    </Layout>
  )
}
