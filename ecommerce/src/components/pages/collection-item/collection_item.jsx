import React from 'react'
import './collection_item.scss'
import Custombutton from '../custombutton/custombutton'
import { connect } from 'react-redux'
import { additem } from '../../../redux/cart/cart.actions'


const Collection_item = ({ item, additem }) => {
    const { name, price, imageUrl } = item;
return (
    <div className='collection-item'>
    <div className='image' style={{backgroundImage:`url(${imageUrl})`}} />
      
    <div className='collection-footer'>
    <span className='name'> {name}  </span>
    <span className='price'> {price}  </span>
    <Custombutton onClick={ () => additem(item) } inverted>Add to Cart</Custombutton>
    </div>
    </div>
)
}

const mapDispatchToProps = dispatch => ({
     additem: item  => dispatch(additem(item))
})

export default connect(null, mapDispatchToProps)(Collection_item)