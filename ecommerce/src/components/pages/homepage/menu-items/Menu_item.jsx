import React from 'react'
import './menu_item.scss'

 const Menu_item = ( props )  => {
  return (
    <div style={{ backgroundImage:`url(${props.imageUrl})` }}  className={`${props.size} menu-item`  }>
    <div className='content'>
        <h1 className='title'> {props.title.toUpperCase()} </h1> 
        <span className='subtitle'> Shop Now </span> 
    </div>
    </div>
      )
}

export default Menu_item