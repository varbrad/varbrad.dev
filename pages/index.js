import React from 'react'
import Heading from '../components/ui/Heading'
import Button from '../components/ui/Button'
import Section from '../components/layout/Section'
import AboutMe from '../components/sections/AboutMe'
import {
  PATTERN_TRIANGLES,
  PATTERN_CB,
  PATTERN_STARS,
  PATTERN_STRIPES,
} from '../styles'
import '../styles/style.scss'
import Projects from '../components/sections/Projects'
import Skills from '../components/sections/Skills'
import Contact from '../components/sections/Contact'

const Home = () => {
  const [data, setData] = React.useState(0)
  return (
    <div>
      {/* Top thing goes here */}
      <Section />
      <AboutMe />
      <Projects />
      <Skills />
      <Contact />
    </div>
  )
}

export default Home
