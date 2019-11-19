import React, { Component } from "react";
import styled from "styled-components";
import { Form, Field } from "react-final-form";

import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "firebase";

const config = {
  apiKey: "AIzaSyC3tAS5cYcN0_V-n1v9rSOIoKOLqt_Ypeg",
  authDomain: "kristina-kim-resume.firebaseapp.com",
  databaseURL: "https://kristina-kim-resume.firebaseio.com",
  projectId: "kristina-kim-resume",
  storageBucket: "kristina-kim-resume.appspot.com",
  messagingSenderId: "614662872145",
  appId: "1:614662872145:web:b6895415d34b43504c2c70",
  measurementId: "G-SMJ2YE6HNN"
};
firebase.initializeApp(config);

const SignInBlock = styled.div`
  width: 50%;
  display: flex;
`;
const SignOutBtn = styled.button`
  height: 35px;
  margin-bottom: 15px;
  background-color: white;
  border: 1px solid #aaa8a8;
`;
const SignOutP = styled.p`
  margin-right: 15px;
  color: #3e3e3e;
`;
export default class SignIn extends React.Component {
  state = {
    isSignedIn: false // Local signed-in state.
  };
  uiConfig = {
    signInFlow: "popup",
    signInSuccessUrl: "/signedIn",
    callbacks: {
      // signInSuccessWithAuthResult: () => console.log("Залогинился")
      signInSuccessWithAuthResult: () => false
    },
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID
      // firebase.auth.FacebookAuthProvider.PROVIDER_ID
    ]
  };

  componentDidMount() {
    this.unregisterAuthObserver = firebase
      .auth()
      .onAuthStateChanged(user => this.setState({ isSignedIn: !!user }));
  }

  componentWillUnmount() {
    this.unregisterAuthObserver();
  }
  render() {
    if (!this.state.isSignedIn) {
      return (
        <SignInBlock>
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        </SignInBlock>
      );
    }
    return (
      <SignInBlock>
        <SignOutP>Привет, {firebase.auth().currentUser.displayName}!</SignOutP>
        <SignOutBtn onClick={() => firebase.auth().signOut()}>
          Выход{" "}
        </SignOutBtn>
      </SignInBlock>
    );
  }
}

// class SignIn extends Component {
//   state = {
//     email: "",
//     password: ""
//   };
//   onSubmit = e => {
//     this.setState({
//       [e.target.id]: e.target.value
//     });
//   };
//   handleSubmit = e => {
//     e.preventDefault();
//     console.log(this.state);
//   };

//   render() {
//     return (
//       <Form
//         onSubmit={this.onSubmit}
//         render={({ handleSubmit, form, submitting, pristine, values }) => (
//           <form onSubmit={this.handleSubmit}>
//             <h5>Sign In</h5>
//             <div>
//               <label htmlFor="email">Email</label>
//               <Field
//                 name="email"
//                 id="password"
//                 component="input"
//                 type="email"
//                 placeholder="Email"
//                 onChange={this.handleChange}
//               />
//             </div>
//             <div>
//               <label htmlFor="password">Password</label>
//               <Field
//                 name="password"
//                 id="password"
//                 component="input"
//                 type="password"
//                 placeholder="Password"
//                 onChange={this.handleChange}
//               />
//               />
//             </div>
//             <div>
//               <button>Login</button>
//             </div>
//           </form>
//         )}
//       />
//     );
//   }
// }

// export default SignIn;
