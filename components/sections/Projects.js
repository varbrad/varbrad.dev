import React from 'react'
import Heading from '../ui/Heading'
import Section from '../layout/Section'
import { PATTERN_CB } from '../../styles'
import Panel from '../layout/Panel'

const Projects = () => (
  <Section pattern={PATTERN_CB}>
    <Panel>
      <Heading icon='far fa-folder-open'>Projects</Heading>
    </Panel>
  </Section>
)

export default Projects
