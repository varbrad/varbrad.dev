import React from 'react'
import Section from '../components/layout/Section'
import AboutMe from '../components/sections/AboutMe'
import '../styles/style.scss'
import Projects from '../components/sections/Projects'
import Skills from '../components/sections/Skills'
import Contact from '../components/sections/Contact'

const Home = () => (
  <div>
    <Section />
    <AboutMe />
    <Projects />
    <Skills />
    <Contact />
  </div>
)

export default Home
