import React from 'react'

const Home = () => {
  const [data, setData] = React.useState(0)
  return (
    <div>
      <h1>Hi!</h1>
      <p>Current value is: {data}</p>
      <button onClick={() => setData(state => state + 1)}>
        Click to +1
      </button>
    </div>
  )
}

export default Home
