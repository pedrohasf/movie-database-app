import React from "react";
import SignIn from "../../components/SignIn/SignIn.component";
import SignUp from "../../components/signUp/SignUp.component";
import { SignInAndSignUpPageContainer } from "./SignInAndSignUp.styles.jsx";

const SignInAndSignUpPage = () => (
  <SignInAndSignUpPageContainer className="flex-col flex-row">
    <SignIn />
    <SignUp />
  </SignInAndSignUpPageContainer>
);

export default SignInAndSignUpPage;
