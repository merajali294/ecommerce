import './checkoutItem.scss'
import React from 'react'
import CartItem from '../cartitem/cartitem'
import { connect } from 'react-redux'
import { clearItemfromCart } from '../../redux/cart/cart.actions'
import StripeCheckoutButton from '../stripe_button/stripe_button'

const CheckoutItem = ({ cartItem, clearItem }) => {
    const {name, imageUrl, price, quantity} = cartItem
  return (
    <div className='checkout-item'>
    <div className='image-container'>
      <img src={imageUrl} alt='imageEcommerce' />
    </div>
    <span className='name'>{name}</span>
    <span className='quantity'>{quantity}</span>
    <span className='price'>{price}</span>
    <div className='remove-button' onClick={ () => clearItem(cartItem)}> X </div>

    </div>
  )
}

const mapDispatchToProps = dispatch => ({
    clearItem: item  => dispatch(clearItemfromCart(item))
})

export default connect(null,mapDispatchToProps)(CheckoutItem)