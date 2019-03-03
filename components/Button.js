import React from 'react'
import styled from 'styled-components'

const Button = styled.button``

export default ({ children, ...props }) => (
  <Button
    {...props}
    className='bg-blue hover:bg-blue-dark text-white font-bold py-2 px-4 rounded'
  >
    {children}
  </Button>
)
