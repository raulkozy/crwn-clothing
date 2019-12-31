import React, { useState } from "react";
import "./signIn.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import {
  googleSignInStart,
  emailSignInStart
} from "../../redux/user/user.actions";
import { connect } from "react-redux";

const SignIn = ({ emailSignInStart, googleSignInstart }) => {
  const [userCredentials, setCredentials] = useState({
    email: "",
    password: ""
  });

  const { email, password } = userCredentials;
  const handleSubmit = async event => {
    event.preventDefault();

    emailSignInStart(email, password);
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setCredentials({ ...userCredentials, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account</h2>
      <span>Sign in with email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          name="email"
          type="email"
          label="Email"
          handleChange={handleChange}
          value={email}
          required
        />

        <FormInput
          name="password"
          type="password"
          label="Password"
          handleChange={handleChange}
          value={password}
          required
        />

        <div className="buttons">
          <CustomButton type="submit"> Sign In </CustomButton>
          <CustomButton
            type="button"
            onClick={googleSignInstart}
            isGoogleSignIn
          >
            {" "}
            Google Sign In{" "}
          </CustomButton>
        </div>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  googleSignInstart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password }))
});

export default connect(null, mapDispatchToProps)(SignIn);
