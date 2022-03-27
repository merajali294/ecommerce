import React from 'react'
import { Link } from 'react-router-dom'
import './Header.scss'
import { ReactComponent as Logo } from '../../../assets/crown.svg'
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { auth } from '../../../firebase/firebase.utils'
import Carticon from '../../carticon/carticon'
import Cartdropdown from '../../cart-dropdown/cart-dropdown'
import { connect } from 'react-redux'

const Header = ( { currentuser, hidden } ) => {
  return (
    <div className='header'>
    <Link className='option' to='/'>
    <Logo className='logo' />
    </Link>
    <div className='options'>
    <Link className='option' to='/shop'>Shop</Link>
    <Link className='option' to='/contact'>Contact</Link>
    {
      
      currentuser ? (<div className='option' onClick={ ()=>{auth.signOut() } } > 
      Sign Out 
      </div>)
      : (<Link className='option' to='/signin' >Sign In
      </Link> )
    }
    <Carticon />
    </div>
    {
      hidden ? null : <Cartdropdown/> 
    }
    </div>
  )
}

const mapStateToProps = ( { /*user:{ currentuser },*/ cart: { hidden } } ) => ({
      // currentuser,
      hidden
  })
  // const mapStateToProps = (state) => ({
  //   currentuser:state.user.currentuser
  // })


export default connect(mapStateToProps)(Header)
// export default (Header)