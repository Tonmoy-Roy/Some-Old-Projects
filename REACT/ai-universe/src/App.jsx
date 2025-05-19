// eslint-disable-next-line no-unused-vars
import React from 'react'
import './App.css'
import Header from './component/Header/Header'
import Button from './component/Button/Button'
import Card from './component/Card/Card'

const App=()=> {

  return (
    <>
      <Header></Header>
      <Button>Sort By Date</Button>
      <Card></Card>
    </>
  )
}

export default App
