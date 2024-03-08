import { useState } from 'react'
import './App.css'
import Header from './components/Header'

import ProductionHouse from './components/ProductionHouse'
import SliderList from './components/SliderList'
import GenreMovieList from './components/GenreMovieList'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>
      <Header/>
      <SliderList/>
      <ProductionHouse/>
      <GenreMovieList/>
      <Footer/>
    </div>
  )
}

export default App
