import React from 'react'
import { Link, useNavigate} from 'react-router-dom'


const Nav = () => {

const navigate = useNavigate()


    return (
        <div>
            <div className='head'>
                <h1>Exsonicc</h1>
                <input placeholder='search here'/>
                <button  onClick={() => navigate('/create')}>Create</button>
            </div>
            <div className='navbar'>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/findjob'>Find Job</Link></li>
                    <li><Link to='/about'>About Us</Link></li>
                    <li><Link to='/contact'>Contact Us</Link></li>
                    
                </ul>
            </div>
        </div>

    )
}

export default Nav
