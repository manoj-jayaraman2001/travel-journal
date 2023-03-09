import React from 'react'
import './App.css'
import logo from './assets/logo.png'
import Card from './components/card'
import data from "./data.js";
function App() {
  const Cards = data.map(place => <Card {...place}/>)

  return (
    <div className="App">

      <nav>
        <img src={logo} alt="logo" />
        <p>my travel journal</p>
      </nav>
      <section>
        {Cards}
      </section>
    </div>
  )
}

export default App
