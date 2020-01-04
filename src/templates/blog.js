import React from 'react';
import { graphql } from 'gatsby'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'

import Layout from '../components/layout'
import Head from '../components/head'

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      publishedDate(fromNow: true)
      body {
        json
      }
    }
  }
`

export default function Blog(props) {
  const { title, publishedDate, body } = props.data.contentfulBlogPost
  const options = {
    renderNode: {
      'embedded-asset-block': (node) => {
        if(node.data.target.fields) {
          const alt = node.data.target.fields.title['en-US']
          const url = node.data.target.fields.file['en-US'].url
          return <img alt={alt} src={url} />
        }
      }
    }
  }

  return (
    <Layout>
      <Head title={title} />
      <h1>{title}</h1>
      <p>{publishedDate}</p>
      {documentToReactComponents(body.json, options)}
    </Layout>
  )
}
