import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Head from "../components/head"

export const query = graphql`
  query($slug: String!) {
    contentfulWork(slug: { eq: $slug }) {
      title
    }
  }
`

export default function Work(props) {
  const { title } = props.data.contentfulWork
  return (
    <Layout>
      <Head title={title} />
      <h1>{title}</h1>
    </Layout>
  )
}
