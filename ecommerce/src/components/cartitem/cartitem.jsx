import React from 'react'
import './cartitem.scss'

 const CartItem = ( {item:  {imageUrl, price, name, quantity }} ) =>   (
   <div className='cart-item'>
   {console.log(imageUrl)}
    <img src={imageUrl} alt='item-image' />
    <div className='item-details'>
    <span className='name'>{name}
    </span>
    <span className='price'>{quantity}*${price}
    </span>
    </div>
    </div>
  )
 
export default CartItem