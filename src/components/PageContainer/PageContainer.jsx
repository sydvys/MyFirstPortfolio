import React from 'react'
import Header from '../Header/Header'

const pageContainer = ({children}) => {
  return (
    <>
      <Header/>
      <main>{children}</main>
    </>
  )
}

export default pageContainer
