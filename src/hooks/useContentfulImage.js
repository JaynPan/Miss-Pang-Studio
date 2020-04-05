import { graphql, useStaticQuery } from "gatsby"

export default assetUrl => {
  const { allContentfulAsset } = useStaticQuery(
    graphql`
      query CONTENTFUL_IMAGE_QUERY {
        allContentfulAsset {
          nodes {
            file {
              url
            }
            fluid(maxWidth: 800, quality: 85) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    `
  )
  return allContentfulAsset.nodes.find(n => n.file.url === assetUrl).fluid
}
