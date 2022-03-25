import React from 'react'
import { connect } from 'react-redux'
import './cart-dropdown.scss'
import Custombutton from '../pages/custombutton/custombutton'
import CartItem from '../cartitem/cartitem'

 const Cartdropdown = ({cartItems}) => 
    (
    <div className='cart-dropdown'>
    <div className='cart-items'>
    {cartItems.map(cartItem => 
      (<CartItem key={cartItem.id} item={cartItem} />)
      )}
    </div>
    <Custombutton>Goto checkout</Custombutton> 
    </div>
  )
 

 const mapStateToProps = ( {cart: { cartItems } }) => ({
  cartItems
})

export default connect(mapStateToProps)(Cartdropdown)