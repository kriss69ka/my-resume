import React, { Component } from "react";
import styled from "styled-components";
import { googleLogin, appleLogin, facebookLogin } from "../store/actions/login";
import { connect } from "react-redux";

const mapDispatchToProps = {
  googleLogin
};
class SignInComponent extends Component {
  loginWithGoogle = () => {
    this.props.googleLogin();
  };

  render() {
    return (
      <>
        <div style={{ margin: "10px" }} onClick={this.loginWithGoogle}>
          googleLogin
        </div>
        <div style={{ margin: "10px" }} onClick={appleLogin}>
          appleLogin
        </div>
        <div style={{ margin: "10px" }} onClick={facebookLogin}>
          facebookLogin
        </div>
      </>
    );
  }
}

export const SignIn = connect(null, mapDispatchToProps)(SignInComponent);
