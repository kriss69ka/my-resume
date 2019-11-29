import React, { Component } from "react";
import { googleLogin } from "../store/actions/login";
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
  transition: 0.3s;

  &:focus {
    color: #000000;
  }
  &:hover {
    color: #000000;
  }
`;

const Wraper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100vh;
`;
class SignInComponent extends Component {
  loginWithGoogle = () => {
    this.props.googleLogin();
  };

  render() {
    return (
      <Wraper>
        <SignInBtn onClick={this.loginWithGoogle}>google Login</SignInBtn>
      </Wraper>
    );
  }
}

export const SignIn = connect(null, mapDispatchToProps)(SignInComponent);
