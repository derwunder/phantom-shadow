// @flow
import createHashHistory from 'history/createHashHistory';
import { auth, google } from '../firebase/Constants';

const history = createHashHistory();
// import type { signinStateType } from '../reducers/signin';

/* type actionType = {
  +type: string
}; */
export const USERDATA_CHANGE = 'USERDATA_CHANGE';
export const LOGIN = 'LOGIN';
export const LOGOUT = 'LOGOUT';
export const EDITOR_MODE = 'EDITOR_MODE';

export function logoutFB() {
  return () => auth.signOut()
    .then(() => {
      console.log('Log Out'); // Sign-out successful.
      return history.replace('/');
    })
    .catch((error) => {
      console.log(`Error logout ${error}`); // An error happened.
    });
}

export function login(userData) {
  return {
    type: LOGIN,
    userData
  };
}

export function loginStat(loginStatus) {
  return {
    type: 'LOGIN_STAT',
    loginStatus
  };
}

export function startLoginEmail(email, password) {
  return (dispatch) => auth.signInWithEmailAndPassword(email, password)
    .then((result) => {
      dispatch(loginStat(true));
      return console.log('Login Worked: ', result);
    })
    .catch((error) => {
      dispatch(loginStat(false));
      return console.log('Login unable: ', error);
    });
}

export function createAccount(email, password) {
  return (dispatch) => auth.createUserWithEmailAndPassword(email, password)
    .then((result) => {
      dispatch(loginStat(true));
      return console.log('Create Worked: ', result);
    })
    .catch((error) => {
      dispatch(loginStat(false));
      return console.log('Create unable: ', error);
    });
}

export function forgotUserPass(emailAtSignUp) {
  return () => {
    const userAuth = auth;
    const email = emailAtSignUp;

    return userAuth.sendPasswordResetEmail(email)
      .then(() => console.log('Email sent'))
      .catch((error) => console.log(`Email fail send: ${error}`));
  };
}

export function startLoginGoogleDirect() {
  return () => auth.signInWithRedirect(google)
    .then((result) => {
      if (result.credential) {
        // This gives you a GitHub Access Token. You can use it to access the GitHub API.
        const token = result.credential.accessToken;
        // ...
        console.log(token);
      }
      // The signed-in user info.
      // let user = result.user;
      return console.log(result);
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      // const email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      // const credential = error.credential;
      // ...
      return console.log(`Err: ${error} Cod: ${errorCode} Msg${errorMessage}`);
    });
}
