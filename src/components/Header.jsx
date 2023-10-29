import React from 'react'
import { Link } from 'react-router-dom';
import {HashLink} from 'react-router-hash-link';
import "../styles/Header.scss";
const Header = () => {
  return (
    <nav>
        <h1>Tech Dev</h1>
        <main>
            <HashLink to={"/#home"}>Home</HashLink>
            <Link to={"/contact"}>Contact</Link>
            <HashLink to={"/#about"}>About</HashLink>
            <HashLink to={"/#brands"}>Brands</HashLink>
            <Link to={"/services"}>Services</Link>
        </main>
    </nav>
  )
}

export default Header