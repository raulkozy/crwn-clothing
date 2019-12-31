import React from "react";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";
import "./sign-up.styles.scss";
import { connect } from "react-redux";
import { signUpStart } from "../../redux/user/user.actions";

class SignUp extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayName: "",
      email: "",
      password: "",
      confirmPassword: ""
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { signUpStart } = this.props;
    const { displayName, email, password, confirmPassword } = this.state;
    
    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }
    signUpStart({email, password, displayName});
    // try {
    //   const { user } = await auth.createUserWithEmailAndPassword(
    //     email,
    //     password
    //   );

    //   await createUserProfileDocument(user, { displayName });
    //   this.setState(getSnapshotFromUserAuth
    //     {
    //       displayName: "",
    //       email: "",
    //       password: "",
    //       confirmPassword: ""
    //     },
    //     () => console.log(this.state)
    //   );
    // } catch (error) {
    //   console.log(error);
    // }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { displayName, email, password, confirmPassword } = this.state;
    return (
      <div className="">
        <h2 className="title">I do not have an account</h2>
        <span>Sign Up with email and Password</span>

        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            handleChange={this.handleChange}
            value={displayName}
            label="Display Name"
            required
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            handleChange={this.handleChange}
            label="Email"
            required
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            handleChange={this.handleChange}
            label="Password"
            required
          />
          <FormInput
            type="password"
            name="confirmPassword"
            handleChange={this.handleChange}
            value={confirmPassword}
            label="Confirm Password"
            required
          />

          <CustomButton type="submit">Sign Up</CustomButton>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
});

export default connect(null, mapDispatchToProps)(SignUp);
