import React from 'react';
import { useStaticQuery, graphql } from 'gatsby'
import { Helmet } from 'react-helmet';

export default function Header({ title = '' }) {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  
  return(
    <Helmet title={`${title} | ${data.site.siteMetadata.title}`} /> 
  )
}

