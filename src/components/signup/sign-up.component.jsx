import React, { useState } from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-up.styles.scss";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";

const SignUp = ({signUpStart}) => {
  const [userCredentails, setUserCredentials] = useState({
    displayName: "",
    email: "",
    password: "",
    confirmPassword: ""
  });

  const { displayName, email, password, confirmPassword } = userCredentails;

  const handleSubmit = async event => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    signUpStart({ email, password, displayName });
  };

  const handleChange = event => {
    const { name, value } = event.target;
    setUserCredentials({ ...userCredentails, [name]: value });
  };

  return (
    <div className="">
      <h2 className="title">I do not have an account</h2>
      <span>Sign Up with email and Password</span>

      <form className="sign-up-form" onSubmit={handleSubmit}>
        <FormInput
          type="text"
          name="displayName"
          handleChange={handleChange}
          value={displayName}
          label="Display Name"
          required
        />
        <FormInput
          type="email"
          name="email"
          value={email}
          handleChange={handleChange}
          label="Email"
          required
        />
        <FormInput
          type="password"
          name="password"
          value={password}
          handleChange={handleChange}
          label="Password"
          required
        />
        <FormInput
          type="password"
          name="confirmPassword"
          handleChange={handleChange}
          value={confirmPassword}
          label="Confirm Password"
          required
        />

        <CustomButton type="submit">Sign Up</CustomButton>
      </form>
    </div>
  );
};

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredentials => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);
