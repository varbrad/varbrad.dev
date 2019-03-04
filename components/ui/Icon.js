import React from 'react'
import styled from 'styled-components'

const Icon = styled.i`
  color: inherit;
  font-size: inherit;
  margin-right: 0.5em;
`

export default ({ name, ...props }) => (
  <Icon {...props} className={name} />
)
