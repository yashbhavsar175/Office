import { Link } from 'react-router-dom'
const Nav = () => {
    return (
        <div>
            <nav>
            <h1><Link to="/">Ninja Smoothies</Link></h1>
            <ul>
                <li><Link to ="/login">Log in</Link></li>
                <li className='btn'><Link to ="/signup">Sign up</Link></li>

            </ul>
        </nav>
        </div>
    )
}

export default Nav   