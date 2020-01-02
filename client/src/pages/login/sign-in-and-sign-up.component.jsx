import React from 'react';
import './sign-in-and-sign-up.styles.scss';
import SignIn from "../../components/signIn/signIn.component";
import SignUp from '../../components/signup/sign-up.component';

const SignInAndSignUpPage = () => {
    return (
        <div className='sign-in-and-sign-up'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default SignInAndSignUpPage;