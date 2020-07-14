import { css } from "styled-components"

const sizes = {
  giant: 1440,
  bigDesktop: 1200,
  medDesktop: 1080,
  desktop: 1000,
  deskTab: 820,
  tablet: 768,
  tabhone: 690,
  thone: 630,
  phablet: 480,
  phone: 420,
  tiny: 350,
}

export const media = Object.keys(sizes).reduce((accumulator, label) => {
  const emSize = sizes[label] / 16
  accumulator[label] = (...args) => css`
    @media (max-width: ${emSize}em) {
      ${css(...args)}
    }
  `
  return accumulator
}, {})

export default media
