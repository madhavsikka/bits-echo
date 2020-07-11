import React from "react"
import { graphql, Link } from "gatsby"
import { IoMdArrowRoundBack } from "react-icons/io"
import styled from "styled-components"
import Layout from "../components/layout"
import { Mosaic } from "../components/Archive/index"
import { theme } from "../styles/index"
const { colors, fontSizes } = theme

const BackIcon = styled(IoMdArrowRoundBack)`
  display: flex;
  position: absolute;
  top: 18px;
  left: 25px;
  width: 38px;
  height: auto;
  color: ${colors.white};
  transition: all 100ms;
  :hover {
    color: ${colors.yellow};
    transform: scale(1.2);
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

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
      color: ${colors.white};
      font-size: ${fontSizes.l7};
      font-weight: 300;
      margin: 1rem 0;
    }
    :nth-child(2) {
      text-align: center;
      color: ${colors.yellow};
      font-weight: 600;
      font-size: ${fontSizes.l8};
      margin: 1rem 0;
    }
    :nth-child(3) {
      display: flex;
      width: 400px;
      justify-content: space-between;
      margin: 1rem 0;
    }
  }
`

const Label = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
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
        <div>BITS Echo</div>
        <div>{data.strapiEcho.title}</div>
        <div>
          <Label>{`Volume ${data.strapiEcho.volume}`}</Label>
          <Label>{`${data.strapiEcho.date}`}</Label>
          <Label>{`Issue ${data.strapiEcho.issue}`}</Label>
        </div>
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
        category
        content
        cover {
          childImageSharp {
            fixed(height: 270) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`