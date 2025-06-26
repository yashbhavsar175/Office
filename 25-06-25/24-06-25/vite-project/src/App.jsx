import Nav from '../components/nav'
import './App.css'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <>
      <Nav/>
      <header>
                <div className="smoothie">
                    <img src="/smoothie.png" alt="Smoothie" />
                </div>
                <div className="headings">
                    <h2>Smoothie Recipes</h2>
                    <h3>By Ninjas For Ninjas</h3>
                    <Link to="/smoothies" className="btn">View Recipes</Link>
                </div>
            </header>
      
    </>
  )
}

export default App
