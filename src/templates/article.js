import React from "react"
// import styled from "styled-components"
import { graphql } from "gatsby"

const ArticleTemplate = ({ data }) => {
  return (
    <div>
      <h1>{data.strapiArticle.title}</h1>
      <p dangerouslySetInnerHTML={{ __html: data.strapiArticle.content }} />
    </div>
  )
}

export default ArticleTemplate

export const query = graphql`
  query ArticleTemplate($id: String!) {
    strapiArticle(id: { eq: $id }) {
      title
      category
      content
    }
  }
`
