import React from 'react'
import './css/NavBar.css'


const NavBar = () => {
  return (
    <nav>
      <ul className='navbar'>
        <li className='navlink'>
            <a href="/ ">Home</a>
        </li>

        <li className='navlink'>
            <a href="/About">About</a>
        </li>

        <li className='navlink'>
            <a href="/Services">Services</a>
        </li>
        <li className='navlink'>
            <a href="/Team">Team</a>
        </li>
                <li className='navlink'>
            <a href="/Contact">Contact</a>
        </li>
      </ul>
    </nav>

  );
};

export default NavBar;


