import React from 'react'
import Heading from '../ui/Heading'
import Section from '../layout/Section'
import { PATTERN_TRIANGLES } from '../../styles'
import Panel from '../layout/Panel'

const AboutMe = () => (
  <Section pattern={PATTERN_TRIANGLES}>
    <Panel>
      <Heading icon='far fa-question'>About Me</Heading>
    </Panel>
  </Section>
)

export default AboutMe
