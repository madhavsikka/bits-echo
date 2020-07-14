import React from "react"
import { Redirect } from "@reach/router"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <Redirect to="/" />
  </Layout>
)

export default NotFoundPage
