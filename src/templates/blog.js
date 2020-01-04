import React from 'react';
import { graphql } from 'gatsby'

import Layout from '../components/layout'

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date
      }
      html
    }
  }
`

export default function Blog(props) {
  const { title, date } = props.data.markdownRemark.frontmatter;
  const { html } = props.data.markdownRemark

  return (
    <Layout>
      <h2>{title}</h2>
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{__html: html}}></div>
    </Layout>
  )
}
