import React from 'react'
import Heading from '../components/Heading'
import Button from '../components/Button'

import '../styles/style.scss'

const Home = () => {
  const [data, setData] = React.useState(0)
  return (
    <div className='m-4 p-4 shadow rounded'>
      <Heading>Hello!</Heading>
      <p className='py-4'>Current value is: {data}</p>
      <Button onClick={() => setData(state => state + 1)}>
        Click to +1
      </Button>
    </div>
  )
}

export default Home
