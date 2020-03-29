import React from "react"

import Head from "../components/head"
import Layout from "../components/layout"
import Box from "../components/box"
import Introduction from "../components/introduction"
import FeatureWork from "../components/feature_work"
import "../styles/variables.scss"
import "../styles/index.scss"

export default function IndexPage() {
  return (
    <Layout>
      <Head title="Home" />
      <Box />
      <Introduction />
      <FeatureWork />
    </Layout>
  )
}
