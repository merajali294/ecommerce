import React from 'react'
import './custombutton.scss'
 const Custombutton = ({ children, isGooglesignin, ...otherProps }) => 
   (
    <button className={`${isGooglesignin ? 'google-sign-in' : '' } custom-button`}   {...otherProps} >
    {children}
    </button>
  )
 

export default Custombutton