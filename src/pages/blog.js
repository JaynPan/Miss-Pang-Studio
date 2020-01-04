import React from 'react';
import {useStaticQuery, graphql, Link} from 'gatsby'

import Layout from '../components/layout'
import blogStyles from './blog.module.scss';

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
            fields {
              slug
            }
          }
        }
      }
    }`)

  return (
    <Layout>
      <h1>Blog</h1>
      <ol className={blogStyles.posts}>
        {data.allMarkdownRemark.edges.map((edge, i) => {
          const {frontmatter, fields} = edge.node;
          return(
            <li key={`edge_${i}`} className={blogStyles.post}>
              <Link to={`/blog/${fields.slug}`}>
                <h3>{frontmatter.title}</h3>
                <p>{frontmatter.date}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  );
}
