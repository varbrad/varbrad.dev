import React from 'react'
import styled from 'styled-components'
import { HEADING_COLOUR } from '../../styles'
import Icon from './Icon'

const Heading = styled.h1`
  display: flex;
  align-items: center;
  font-size: 2rem;
  color: ${HEADING_COLOUR};
  margin: 0;
  margin-bottom: 0.5rem;
  padding: 0;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  font-family: 'Fredoka One', sans-serif;
  font-weight: 400;
`

export default ({ children, icon, ...props }) => (
  <Heading {...props}>
    {icon && <Icon name={icon} />}
    {children}
  </Heading>
)
