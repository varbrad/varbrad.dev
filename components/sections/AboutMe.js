import React from 'react'
import Heading from '../ui/Heading'
import Section from '../layout/Section'
import { PATTERN_DIAMONDS } from '../../styles'
import Panel from '../layout/Panel'

const AboutMe = () => (
  <Section pattern={PATTERN_DIAMONDS}>
    <Panel>
      <Heading>About Me</Heading>
    </Panel>
  </Section>
)

export default AboutMe
