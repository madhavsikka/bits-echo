import React from "react"
import { graphql, Link } from "gatsby"
import styled from "styled-components"
import { Card } from "../components/Archive/index"
import { theme } from "../styles/index"
import Layout from "../components/layout"
import SEO from "../components/seo"
const { colors, fontSizes } = theme

const HeadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  height: 230px;
  background: ${colors.green};
  font-size: ${fontSizes.l9};
  color: ${colors.yellow};
  font-weight: 600;
  p {
    margin: 3rem 0 0;
    :last-child {
      color: ${colors.white};
      font-weight: 300;
    }
  }
`
const BodyContainer = styled.div`
  /* margin-left: 300px; */
  padding: 3rem;
  display: grid;
  grid-template-columns: repeat(auto-fill, 320px);
  grid-gap: 4rem;
  justify-content: center;
  justify-items: center;
  align-items: center;
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

const Archive = ({ data }) => (
  <Layout nav>
    <SEO title="Archive" />
    <HeadingContainer>
      <p>ECHO</p>
      <p>Archive</p>
    </HeadingContainer>
    <BodyContainer>
      {data.allStrapiEcho.edges.map(({ node }) => (
        <StyledLink key={node.id} to={`/echos/${node.id}`}>
          <Card width="320px" height="400px" node={node} />
        </StyledLink>
      ))}
    </BodyContainer>
  </Layout>
)

export const query = graphql`
  query ArchiveQuery {
    allStrapiEcho(sort: { fields: [date], order: DESC }) {
      edges {
        node {
          id
          title
          volume
          issue
          cover {
            childImageSharp {
              fixed(width: 320, height: 200) {
                ...GatsbyImageSharpFixed
              }
            }
          }
          date(formatString: "MMMM YYYY")
        }
      }
    }
  }
`

export default Archive
