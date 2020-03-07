import React from 'react'
import FormInput from '../FormInput/FormInput.component'
import CustomButton from '../CustomButton/CustomButton.component'

import { signInWithGoogle, auth}  from '../../firebase/firebase.utils.js'

import './SignIn.styles.scss'

class SignIn extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }
    handleSubmit= async event =>{
        event.preventDefault()

        const { email, password } = this.state
        
        try{
            await auth.signInWithEmailAndPassword(email, password)
            this.setState({emai: '', password: ''})
        } catch(error){
            console.error(error)
        }
    }
    handleChange = event =>{
        const {value, name} = event.target

        this.setState({[name]: value})
    }
    render(){
        return(
            <div className='sign-in'>
                <h2 className='title'>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' type='email' value={this.state.email} handleChange={this.handleChange} label='email' required />
                    <FormInput name='password' type='password' value={this.state.password} handleChange={this.handleChange} label='password' required />
                    <div className='buttons'>
                        <CustomButton type='submit'> Sign in </CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign in with Google </CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn