import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import footerStyles from './footer.module.scss'

export default function Footer() {
  const data = useStaticQuery(graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`)

  return (
    <footer className={footerStyles.footer}>
      <p>Created by {data.site.siteMetadata.author}, copyright 2020</p>
    </footer>
  );
}
