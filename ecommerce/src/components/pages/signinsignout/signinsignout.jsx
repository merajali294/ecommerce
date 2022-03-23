import React from 'react'
import Signin from '../sign-in/sign-in'
import Signup from '../signup/signup'
import './signinsignout.scss'

const Signinsignout = () => {
  return (
    <div className='sign-in-and-sign-up'>
    <Signin/>
    <Signup/>
    </div>
  )
}

export default Signinsignout