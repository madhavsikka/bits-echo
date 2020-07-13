import React from "react"
import { graphql } from "gatsby"
import { BackIcon, StyledLink } from "../styles/shared"
import styled from "styled-components"
import Layout from "../components/layout"
import { Mosaic, Sharebar } from "../components/Archive/index"
import { theme } from "../styles/index"
const { colors, fontSizes } = theme

const StyledContainer = styled.main`
  margin: 5rem 3rem;
`

const StyledBanner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 4rem;
  background: ${colors.green};
  div {
    :nth-child(1) {
      padding: 1rem;
      text-align: center;
      color: ${colors.yellow};
      font-weight: 700;
      font-size: ${fontSizes.l8};
      margin: 1rem 0 0;
    }
    :nth-child(2) {
      display: flex;
      width: 400px;
      justify-content: space-between;
      margin: 2rem 0 1rem;
    }
    :nth-child(3) {
      margin: 0 0 1rem;
    }
  }
`

const Label = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 110px;
  height: 25px;
  border-radius: 5px;
  background: ${colors.white};
  color: ${colors.green};
  font-weight: 600;
  font-size: ${fontSizes.l1};
`

const EchoTemplate = ({ data }) => {
  return (
    <Layout>
      <StyledLink to="/archive">
        <BackIcon />
      </StyledLink>
      <StyledBanner>
        <div>{data.strapiEcho.title}</div>
        <div>
          <Label>{`Volume ${data.strapiEcho.volume}`}</Label>
          <Label>{`${data.strapiEcho.date}`}</Label>
          <Label>{`Issue ${data.strapiEcho.issue}`}</Label>
        </div>
        <Sharebar title={data.strapiEcho.title} />
      </StyledBanner>
      <StyledContainer>
        <Mosaic articles={data.strapiEcho.articles} />
      </StyledContainer>
    </Layout>
  )
}

export default EchoTemplate

export const query = graphql`
  query EchoTemplate($id: String!) {
    strapiEcho(id: { eq: $id }) {
      title
      volume
      issue
      date(formatString: "MMMM YYYY")
      articles {
        id
        title
        type
        content
        cover {
          childImageSharp {
            fluid(maxHeight: 300) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
