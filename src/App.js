import React from 'react'
import Navbar from './Components/Navbar/Navbar'
import Hero from './Components/Hero/Hero'
import data from './data'

const App = () => {
const hero = data.map(item => {
  return(
    <Hero
    key = {item.id}
    item={item}
    />
  )
}
)
  return (
    <div className='app'>
      <Navbar />
      <div>{hero}</div>
    </div>
  )
}

export default App