import * as firebase from "firebase";

import axios from "axios";

export const SIGN_IN = "SIGN_IN";
export const REG_USER = "REG_USER";

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

const google = new firebase.auth.GoogleAuthProvider();

const login = (provider, dispatch) => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(result => {
      const user = result.user;
      dispatch({ type: SIGN_IN, payload: { user } });
      return { email: user.email, fio: user.displayName, uid: user.uid };
    })
    .then(userData => {
      axios({
        method: "post",
        url: "/regUser",
        data: {
          userInfo: userData
        }
      }).then(dispatch({ type: REG_USER }));
    })
    .catch(error => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.email;
      const credential = error.credential;
      console.error(errorCode, errorMessage, email, credential);
    });
};

export const googleLogin = () => dispatch => login(google, dispatch);
