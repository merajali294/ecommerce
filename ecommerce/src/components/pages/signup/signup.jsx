import React, { Component } from 'react'
import './signup.scss'
import Forminput from '../forminput/form-input'
import Custombutton from '../custombutton/custombutton'
import { auth, createUserProfileDocument } from '../../../firebase/firebase.utils'


 class Signup extends Component {
    constructor(){
        super() 
            this.state = {
                displayname: '',
                email : '',
                password: '',
                confirmpassword: ''
            }

    }

    handlesubmit = async e =>{
        e.preventDefault()
        const { displayname, email, password, confirmpassword } = this.state
        if( password!=confirmpassword ){
            alert('passwords donot match')
            return
        }
        try {
            const {user } = await auth.createUserWithEmailAndPassword(email, password)
            await createUserProfileDocument(user, {displayname})
            this.setState({
                displayname: '',
                email : '',
                password: '',
                confirmpassword: ''
            })
        } catch (error) {
            console.log(error);
        }
    }

    handlechange = (e) =>{
        e.preventDefault()
        const { name, value } = e.target
        this.setState({ [name]: value })
    }

    render() {
        const { displayname, email, password, confirmpassword } = this.state
        return (
            <div className='sign-up'>
                <h2 className='title'> I dont have an account </h2>
                <span>SIgn up with email & password</span>
                <form onSubmit={this.handlesubmit} className='sign-up-form'>
                <Forminput 
                type='text' 
                name='displayname' 
                label='displayname'
                 onChange={this.handlechange} 
                 value={displayname} />
                
                 <Forminput type='text' name='email' label='email' onChange={this.handlechange} value={email} />
                <Forminput type='password' name='password' label='password' onChange={this.handlechange} value={password} />
                <Forminput type='password' name='confirmpassword' label='confirmpassword' onChange={this.handlechange} value={confirmpassword} />

                <Custombutton type='submit'> Sign Up </Custombutton>

                </form>
            </div>
        )
    }
}


export default Signup