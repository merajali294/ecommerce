import './form-input.scss'

import React, { Component } from 'react'

   
    const Forminput = ({ handleChange, label, ...otherprops }) => (
 
        <div className='group'>
            <input  className='form-input' onChange={handleChange}  {...otherprops} />
        {
            label ? 
            ( <label className={`${otherprops.value.length ? 'shrink' : ''   } form-input-label`} > {label} </label> )
            : null
        }
            </div>
        )
    
   

export default  Forminput