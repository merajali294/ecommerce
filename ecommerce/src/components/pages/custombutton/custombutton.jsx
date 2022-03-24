import React from 'react'
import './custombutton.scss'
 const Custombutton = ({ children, isGooglesignin, inverted, ...otherProps }) => 
   (
    <button className={`${inverted ? 'inverted' : ''} ${isGooglesignin ? 'google-sign-in' : '' } custom-button`}   {...otherProps} >
    {children}
    </button>
  )
 

export default Custombutton