import React, { Component } from 'react'
import './sign-in.scss'
import Forminput from '../forminput/form-input'
import Custombutton from '../custombutton/custombutton'
import { auth, signInWithGoogle } from '../../../firebase/firebase.utils'

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
        const { email, password } = this.state
        try {
            auth.signInWithEmailAndPassword(email, password)
            this.setState({ email: '',password: '' })    
        } catch (error) {
            console.log(error);
        }
        
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
                <Custombutton type='submit'> Sign In </Custombutton>
                <Custombutton onClick={signInWithGoogle} isGooglesignin > {''}
                Sign In with Google {''} </Custombutton>
                </form>
            </div>
        )
    }
}

export default Signin