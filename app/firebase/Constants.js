import firebase from 'firebase';

require('firebase/firestore');

const config = {
  apiKey: 'AIzaSyDjnTry_6Y2tmG6trOj00uhOgSKV2h9Qi0',
  authDomain: 'phantom-shadow.firebaseapp.com',
  databaseURL: 'https://phantom-shadow.firebaseio.com',
  projectId: 'phantom-shadow',
  storageBucket: 'phantom-shadow.appspot.com',
  messagingSenderId: '10725664308'
};

firebase.initializeApp(config);

export const ref = firebase.database().ref();
// export const stgRef = firebase.storage().ref();
export const auth = firebase.auth();
export const db = firebase.database();
export const fstoreRef = firebase.firestore();

// export var storageRef = firebase.storage().ref();
export const google = new firebase.auth.GoogleAuthProvider();
export const github = new firebase.auth.GithubAuthProvider();
