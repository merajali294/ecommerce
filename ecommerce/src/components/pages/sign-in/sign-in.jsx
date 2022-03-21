import React, { Component } from 'react'
import './sign-in.scss'
import Forminput from '../forminput/form-input'
class Signin extends Component {
    constructor(){
        super()
        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = (e) =>{
        e.preventDefault()
        this.setState({
            email: '',
            password: ''
        })
    }
    
    handleChange = (e) =>{
        e.preventDefault()
        const { value, name} = e.target
        this.setState({
            [name]: value,
        })
    }

    render() {
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with id & pwd</span>
                <form onSubmit={this.handleSubmit} >
                <Forminput type='text' name='email' handleChange={this.handleChange}  value={this.state.email}  label='email' />
                <Forminput type='password' label='password' name='password' handleChange={this.handleChange} value={this.state.password}  />
                <input type='submit' name='submit' value='Submit'  />
                </form>
            </div>
        )
    }
}

export default Signin