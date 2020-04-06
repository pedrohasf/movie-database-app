import React from "react";
import FormInput from "../FormInput/FormInput.component";
import CustomButton from "../CustomButton/CustomButton.component";

import { signInWithGoogle, auth } from "../../firebase/firebase.utils.js";

import {
  SignInContainer,
  SignInTitleMessage,
  SignInInstructionMessage,
  SignInForm,
  SignInButtonsContainer,
} from "./SignIn.styles.jsx";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
    };
  }
  handleSubmit = async (event) => {
    event.preventDefault();

    const { email, password } = this.state;

    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ emai: "", password: "" });
    } catch (error) {
      console.error(error);
    }
  };
  handleChange = (event) => {
    const { value, name } = event.target;

    this.setState({ [name]: value });
  };
  render() {
    return (
      <SignInContainer>
        <SignInTitleMessage className="text-3xl">
          I already have an account
        </SignInTitleMessage>
        <SignInInstructionMessage>
          Sign in with your email and password
        </SignInInstructionMessage>
        <SignInForm onSubmit={this.handleSubmit}>
          <FormInput
            name="email"
            type="email"
            value={this.state.email}
            handleChange={this.handleChange}
            label="email"
            required
          />
          <FormInput
            name="password"
            type="password"
            value={this.state.password}
            handleChange={this.handleChange}
            label="password"
            required
          />
          <SignInButtonsContainer>
            <CustomButton type="submit"> Sign in </CustomButton>
            <CustomButton
              type="button"
              onClick={signInWithGoogle}
              isGoogleSignIn
            >
              {" "}
              Sign in with Google{" "}
            </CustomButton>
          </SignInButtonsContainer>
        </SignInForm>
      </SignInContainer>
    );
  }
}

export default SignIn;
