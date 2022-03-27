import React from 'react'
import {connect} from 'react-redux'
import { toggleCartHidden } from '../../redux/cart/cart.actions'
import { ReactComponent as Shopicon } from '../../assets/shopping-bag.svg'
import './carticon.scss'
import { selectCartItems, selectCartItemsCount } from '../../redux/cart/cartSelectors'
import { createStructuredSelector } from 'reselect'

 const Carticon = ( { toggleCartHidden, itemCount } ) =>  
 (
    <div className='cart-icon' onClick={toggleCartHidden} >
      <Shopicon className='shopping-icon' />
      <span className='item-count'> {itemCount} </span> 
    </div>
  )

 const mapDispatchToProps = dispatch => ({
        toggleCartHidden: () => dispatch(toggleCartHidden())
})

 const mapStateToProps = createStructuredSelector( {
  itemCount:  selectCartItemsCount
 } ) 

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Carticon)