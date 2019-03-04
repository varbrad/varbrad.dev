import React from 'react'
import styled from 'styled-components'
import { MAX_WIDTH, WHITE } from '../../styles'

const Panel = styled.div`
  max-width: ${MAX_WIDTH};
  margin: auto;
  background-color: rgba(255, 255, 255, 0.5);
  box-shadow: 0 3px 12px rgba(0, 0, 0, 0.2);
  padding: 5px;
  border-radius: 3px;

  @media screen and (max-width: ${MAX_WIDTH}) {
    padding-left: 0;
    padding-right: 0;
  }
`

const PanelInner = styled.div`
  background-color: ${WHITE};
  padding: 1rem;
`

export default ({ children, ...props }) => (
  <Panel {...props}>
    <PanelInner>{children}</PanelInner>
  </Panel>
)
