import React from "react"
import { graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"
import Head from "../components/head"

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
  const options = {
    renderNode: {
      "embedded-asset-block": node => {
        if (node.data.target.fields) {
          const alt = node.data.target.fields.title["en-US"]
          const { url } = node.data.target.fields.file["en-US"]
          return <img alt={alt} src={url} />
        }
      },
    },
  }

  return (
    <Layout>
      <Head title={title} />
      <h1>{title}</h1>
      {documentToReactComponents(content.json, options)}
    </Layout>
  )
}
