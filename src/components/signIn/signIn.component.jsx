import React from "react";
import './signIn.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from "../custom-button/custom-button.component";
import { googleSignInStart, emailSignInStart } from "../../redux/user/user.actions";
import { connect } from "react-redux";

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state={
            email : '',
            password : ''
        }
    }

    handleSubmit = async event => {
        event.preventDefault();
        const { emailSignInStart } = this.props;
        const { email, password } = this.state;

        emailSignInStart(email, password);

        // try{
        //     await auth.signInWithEmailAndPassword(email, password);
        //     this.setState({email: '',password: ''});
        // }catch(error){
        //     console.log(error)
        // }
    }

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name] : value })
    }

    render(){
        const { googleSignInstart } = this.props;
        return (
            <div className='sign-in'>
                <h2>I already have an account</h2>
                <span>Sign in with email and password</span>

                <form onSubmit={this.handleSubmit}>
                    <FormInput
                     name='email'
                     type='email' 
                     label='Email'
                     handleChange={this.handleChange} 
                     value={this.state.email} 
                     required/>

                    <FormInput 
                    name='password' 
                    type='password'
                    label='Password' 
                    handleChange={this.handleChange} 
                    value={this.state.password} 
                    required/>

                    <div className='buttons'>
                        <CustomButton type='submit'> Sign In </CustomButton>
                        <CustomButton type='button' onClick={googleSignInstart} isGoogleSignIn> Google Sign In </CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
    googleSignInstart: () => dispatch(googleSignInStart()),
    emailSignInStart: (email, password) => dispatch(emailSignInStart( {email, password} ))
})

export default connect(null, mapDispatchToProps)(SignIn);