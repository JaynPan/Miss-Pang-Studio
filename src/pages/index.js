import React from "react"

import Head from "../components/head"
import Layout from "../components/layout"
import Box from "../components/box"
import Introduction from "../components/introduction"
import FeatureWork from "../components/feature_work"
import { GlobalDispatchContext } from "../context/GlobalContextProvider"
import "../styles/variables.scss"
import "../styles/index.scss"

export default function IndexPage() {
  const dispatch = React.useContext(GlobalDispatchContext)

  React.useEffect(() => {
    dispatch({ type: "PAGE_NAME", page: "home" })
  }, [])

  return (
    <Layout>
      <Head title="Home" />
      <Box />
      <Introduction />
      <FeatureWork />
    </Layout>
  )
}
