import React from "react";
//components
import SignIn from "../../components/sign-in/sign-in.component";
import SignUp from "../../components/sign-up/sign-up.component";

//without styled components
// import "./sign-in-and-sign-up.styles.scss";

//with styled components
import { SignInAndSignUpContainer } from "./sign-in-and-sign-up.component.styles";

const SignInAndSignUpPage = () => (
    <SignInAndSignUpContainer>
        <SignIn />
        <SignUp />
    </SignInAndSignUpContainer>
);

export default SignInAndSignUpPage;
