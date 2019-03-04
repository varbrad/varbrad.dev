import React from 'react'
import Heading from '../ui/Heading'
import Section from '../layout/Section'
import { PATTERN_STARS } from '../../styles'
import Panel from '../layout/Panel'

const Skills = () => (
  <Section pattern={PATTERN_STARS}>
    <Panel>
      <Heading icon='far fa-magic'>Skills</Heading>
    </Panel>
  </Section>
)

export default Skills
