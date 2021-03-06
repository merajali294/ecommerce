import React from 'react'
import './checkout.scss'
import { connect } from 'react-redux' 
import { createStructuredSelector } from 'reselect'
import { selectCartItems } from '../../../redux/cart/cartSelectors'
import { selectCartTotal } from '../../../redux/cart/cartSelectors'
import CartItem from '../../cartitem/cartitem'
import CheckoutItem from '../../checkoutItem/checkoutItem'
import StripeCheckoutButton from '../../stripe_button/stripe_button'

const Checkout = ({CartItems, total}) => 
    (
    <div className='checkout-page'>
    <div className='checkout-header'>
    <div className='header-block'>
    <span>Product</span>
    </div>
    <div className='header-block'>
    <span>Description</span>
    </div>
    <div className='header-block'>
    <span>Quantity</span>
    </div>
    <div className='header-block'>
    <span>Price</span>
    </div>
    <div className='header-block'>
    <span>Remove</span>
    </div>
    </div>
    {
      CartItems.map(cartItem => 
        <CheckoutItem cartItem={cartItem} key={cartItem.id} />
        )
    }
    <div className='header-block'>
    <span>Total ${total} </span>
    </div>
    <StripeCheckoutButton price={total}/>
    </div>
    )
 

    const mapStateToProps = createStructuredSelector({
      CartItems: selectCartItems,
      total :selectCartTotal
    })

export default connect(mapStateToProps) (Checkout)