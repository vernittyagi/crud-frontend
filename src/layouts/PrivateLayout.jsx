import React from 'react'
import NavBar from '../components/NavBar'

const PrivateLayout = ({children}) => {
  return (
    <>
        <NavBar/>
        {children}
    </>
  )
}

export default PrivateLayout