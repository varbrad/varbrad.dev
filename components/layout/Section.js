import React from 'react'
import styled from 'styled-components'

import {
  SLANT_HEIGHT,
  SLANT_PADDING,
  EVEN_SECTION_BACKGROUND,
  ODD_SECTION_BACKGROUND,
} from '../../styles'

const Section = styled.section`
  position: relative;
  padding: 4rem;
  margin-top: -${SLANT_HEIGHT};
  padding: ${SLANT_PADDING} 0;

  &:nth-of-type(even) {
    background-image: ${EVEN_SECTION_BACKGROUND};
    z-index: 2;
    clip-path: polygon(
      0 0,
      100% ${SLANT_HEIGHT},
      100% calc(100% - ${SLANT_HEIGHT}),
      0 100%
    );
    &:last-of-type {
      clip-path: polygon(
        0 0,
        100% ${SLANT_HEIGHT},
        100% 100%,
        0 100%
      );
    }
  }

  &:nth-of-type(odd) {
    background-image: ${ODD_SECTION_BACKGROUND};
    z-index: 1;
  }

  &:first-of-type {
    margin-top: 0;
    padding-top: ${SLANT_HEIGHT};
    clip-path: none;
  }

  &:last-of-type {
    padding-bottom: ${SLANT_HEIGHT};
  }
`

const Pattern = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-image: ${props => props.pattern};
  z-index: -1;
`

export default ({ children, pattern, ...props }) => (
  <Section {...props}>
    <Pattern pattern={pattern} />
    {children}
  </Section>
)
