import React from 'react';
import {useStaticQuery, graphql} from 'gatsby'

import Layout from '../components/layout'

export default function BlogPage() {
  const data = useStaticQuery(graphql
    `query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
            html
            excerpt
          }
        }
      }
    }`)

  return (
    <Layout>
      <h1>Blog</h1>
      {data.allMarkdownRemark.edges.map((edge, i) => {
        const {frontmatter, excerpt} = edge.node;

        return(
           <div key={`edge_${i}`}>
            <h3>{frontmatter.title}</h3>
            <p>{frontmatter.date}</p>
            <p>{excerpt}</p>
          </div>
        )
      })}
    </Layout>
  );
}
