import React from 'react'
import SignIn from '../../components/SignIn/SignIn.component'
import SignUp from '../../components/signUp/SignUp.component'
import './SignInAndSignUp.styles.scss'

const SignInAndSignUpPage = () =>(
    <div className='pa3 signInAndSignUp'>
        <SignIn />
        <SignUp />
    </div>
)

export default SignInAndSignUpPage