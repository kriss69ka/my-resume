import React, { Component } from "react";
import { googleLogin, appleLogin, facebookLogin } from "../store/actions/login";
import { connect } from "react-redux";
import styled from "styled-components";

const mapDispatchToProps = {
  googleLogin
};

const SignInBtn = styled.a`
  color: #aaa8a8;
  text-align: center;
  line-height: 28px;
  padding: 0 10px;
  text-decoration: none;
  font-size: 16px;
  cursor: pointer;
  margin-bottom: 10px;
  &:focus {
    color: #000000;
  }
  &:hover {
    color: #000000;
  }
`;
class SignInComponent extends Component {
  loginWithGoogle = () => {
    this.props.googleLogin();
  };

  render() {
    return (
      <>
        <SignInBtn onClick={this.loginWithGoogle}>google Login</SignInBtn>
        <SignInBtn onClick={appleLogin}>apple Login</SignInBtn>
        <SignInBtn onClick={facebookLogin}>facebook Login</SignInBtn>
        <SignInBtn>Выход</SignInBtn>
      </>
    );
  }
}

export const SignIn = connect(null, mapDispatchToProps)(SignInComponent);
