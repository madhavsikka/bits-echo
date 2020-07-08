import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Main } from "../components/Home/index"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Main />
  </Layout>
)

export default IndexPage
