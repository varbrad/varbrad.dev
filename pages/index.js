import React from 'react'
import Heading from '../components/Heading'

import '../style.css'

const Home = () => {
  const [data, setData] = React.useState(0)
  return (
    <div className='bg-red'>
      <Heading>Hello!</Heading>
      <p>Current value is: {data}</p>
      <button onClick={() => setData(state => state + 1)}>
        Click to +1
      </button>
    </div>
  )
}

export default Home
