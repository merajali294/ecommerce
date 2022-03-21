import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import { ReactComponent as Logo } from '../../../assets/crown.svg'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

const Header = () => (
    <div className='header'>
    <Router>
    <Link className='option' to='/'>
    <Logo className='logo' />
    </Link>
    <div className='options'>
    <Link className='option' to='/shop'>Shop</Link>
    <Link className='option' to='/shop'>Contact</Link>
    </div>
    </Router>
    </div>
  )

export default Header
