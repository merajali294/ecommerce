import React from 'react'
import './collection_item.scss'
import Custombutton from '../custombutton/custombutton'

const Collection_item = ({id, name, price,imageUrl}) => (
    <div className='collection-item'>
    <div className='image' style={{backgroundImage:`url(${imageUrl})`}} />
      
    <div className='collection-footer'>
    <span className='name'> {name}  </span>
    <span className='price'> {price}  </span>
    <Custombutton>Add to Cart</Custombutton>
    </div>
    </div>
)

export default Collection_item