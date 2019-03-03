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

const Home = () => {
  const [data, setData] = React.useState(0)
  return (
    <div>
      {/* Top thing goes here */}
      <AboutMe />
      <Section pattern={PATTERN_TRIANGLES}>
        <Heading>Hello!</Heading>
        <p className='py-4'>Current value is: {data}</p>
        <Button onClick={() => setData(state => state + 1)}>
          Click to +1
        </Button>
      </Section>
      <Section pattern={PATTERN_CB}>
        <Heading>Hello!</Heading>
        <p className='py-4'>Current value is: {data}</p>
        <Button onClick={() => setData(state => state + 1)}>
          Click to +1
        </Button>
      </Section>
      <Section pattern={PATTERN_STARS}>
        <Heading>Hello!</Heading>
        <p className='py-4'>Current value is: {data}</p>
        <Button onClick={() => setData(state => state + 1)}>
          Click to +1
        </Button>
      </Section>
      <Section pattern={PATTERN_STRIPES}>
        <Heading>Hello!</Heading>
        <p className='py-4'>Current value is: {data}</p>
        <Button onClick={() => setData(state => state + 1)}>
          Click to +1
        </Button>
      </Section>
    </div>
  )
}

export default Home
