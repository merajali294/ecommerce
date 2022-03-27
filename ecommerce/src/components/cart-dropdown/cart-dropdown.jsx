import React from 'react'
import { connect } from 'react-redux'
import './cart-dropdown.scss'
import Custombutton from '../pages/custombutton/custombutton'
import CartItem from '../cartitem/cartitem'
import { selectCartItems } from '../../redux/cart/cartSelectors'
import { createStructuredSelector } from 'reselect'
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { withRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Cartdropdown = ({cartItems}) =>{ 
  const navigate = useNavigate()
   return (
    <div className='cart-dropdown'>
    <div className='cart-items'>
    {  cartItems.length > 0 ?  cartItems.map(cartItem => 
      (<CartItem key={cartItem.id} item={cartItem} />)
      ) : <span className='empty-message'>No data found</span> }
    </div>
    <Custombutton onClick={ () => 

      navigate('/checkout') 
    
    } >Goto checkout</Custombutton>
    </div>
  )
 }

 const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
 })

// export default withRouter(connect(mapStateToProps)(Cartdropdown))
export default connect(mapStateToProps)(Cartdropdown)