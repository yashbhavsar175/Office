import './App.css'
import React from 'react'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <>
      <nav>
        <h1><Link to="/">Ninja Smoothies</Link></h1>
      </nav>
      <header>
        <div className="smoothie">
          <img src="/smoothie.png" alt="Smoothie" />
        </div>
        <div className="headings">
          <h2>Smoothie Recipes</h2>
          <h3>By Ninjas For Ninjas</h3>
          <Link to="/Smoothies" className="btn">View Recipes</Link>
        </div>
      </header>
      <footer>Copyright 2020 Ninja Smoothies</footer>
    </>
  )
}

export default App
