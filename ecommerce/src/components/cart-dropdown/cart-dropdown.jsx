import React from 'react'
import './cart-dropdown.scss'
import Custombutton from '../pages/custombutton/custombutton'


export const Cartdropdown = () => {
  return (
    <div className='cart-dropdown'>
    <div className='cart-items'>
    <Custombutton>Goto checkout</Custombutton> 
    </div>
    </div>
  )
}

export default Cartdropdown