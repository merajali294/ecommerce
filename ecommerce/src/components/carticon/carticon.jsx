import React from 'react'
import {connect} from 'react-redux'
import { ReactComponent as Shopicon } from '../../assets/shopping-bag.svg'
import './carticon.scss'
import { togglecarthidden } from '../../redux/cart/cart.actions'
    

 const Carticon = ( { togglecarthidden, itemcount } ) =>  
  (
    <div className='cart-icon' onClick={togglecarthidden} >
      <Shopicon className='shopping-icon' />
      <span className='item-count'>{itemcount}</span> 
    </div>
  )


 const mapDispatchToProps = dispatch => ({
        togglecarthidden: () => dispatch(togglecarthidden())
})

 const mapStateToProps = ({cart: {cartItems}}) => ({
    itemcount: cartItems.reduce(
      (accumulatedquantity, cartitem) => accumulatedquantity+cartitem.quantity, 0
    )
})

export default connect(
    null,
    // mapStateToProps,
    mapDispatchToProps
)(Carticon)