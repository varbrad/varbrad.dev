import React from 'react'
import Heading from '../ui/Heading'
import Section from '../layout/Section'
import { PATTERN_STRIPES } from '../../styles'
import Panel from '../layout/Panel'

const Contact = () => (
  <Section pattern={PATTERN_STRIPES}>
    <Panel>
      <Heading icon='far fa-comment-alt'>About Me</Heading>
    </Panel>
  </Section>
)

export default Contact
