import React from 'react'
import { ReactComponent as Shopicon } from '../../assets/shopping-bag.svg'
import './carticon.scss'
import {connect} from 'react-redux'
import { togglecarthidden } from '../../redux/cart/cart.actions'

 const Carticon = ( { togglecarthidden} ) =>  
  (
    <div className='cart-icon' onClick={togglecarthidden} >
      <Shopicon className='shopping-icon' />
      <span className='item-count'>0</span> 
    </div>
  )


 const mapDispatchToProps = dispatch => ({
        togglecarthidden: () => dispatch(togglecarthidden())
})

export default connect(
    null,
    mapDispatchToProps
)(Carticon)