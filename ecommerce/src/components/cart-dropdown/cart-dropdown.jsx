import React from 'react'
import './cart-dropdown.scss'
import Custombutton from '../pages/custombutton/custombutton'
import Cartitem from '../cartitem/cartitem'
import { connect } from 'react-redux'

 const Cartdropdown = ({cartitems}) => 
    (
    <div className='cart-dropdown'>
    <div className='cart-items'>
    {cartitems.map(cartitem => 
      (<Cartitem key={cartitem.id} id={cartitem} />)
      )}
    </div>
    <Custombutton>Goto checkout</Custombutton> 
    </div>
  )
 

 const mapStateToProps = ( {cart: { cartitems } }) => ({
  cartitems
})

export default connect(mapStateToProps)(Cartdropdown)