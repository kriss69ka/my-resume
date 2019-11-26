// import "firebase/auth";
import * as firebase from "firebase";
export const SIGN_IN = "SIGN_IN";

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
const apple = new firebase.auth.OAuthProvider("apple.com");
const facebook = new firebase.auth.FacebookAuthProvider();

const login = (provider, dispatch) => {
  firebase
    .auth()
    .signInWithPopup(provider)
    .then(result => {
      var token = result.credential.accessToken;
      var user = result.user;
      console.log(user.uid);
      dispatch({ type: SIGN_IN, payload: { token, user } });
    })
    .catch(error => {
      var errorCode = error.code;
      var errorMessage = error.message;
      var email = error.email;
      var credential = error.credential;
    });
};

// export const googleLogin = () => login(google);
export const appleLogin = () => login(apple);
export const facebookLogin = () => login(facebook);
export const googleLogin = () => dispatch => login(google, dispatch);
