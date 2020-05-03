import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/functions';

import firebase from 'firebase/app';
import { firebaseConfig } from '../config/firebase-config.js';

// Initialise firebase
let app = firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore(app);
const auth = firebase.auth();
const functions = firebase.functions();

const loginWithEmailAndPassword = async (email, password) => {
  return await auth.signInWithEmailAndPassword(email, password);
};

const signupWithEmailAndPassword = async (email, password) => {
  return await auth.createUserWithEmailAndPassword(email, password);
};

const updateProfile = async (changes) => {
  let user = auth.currentUser;
  if (user) {
    await user.updateProfile(changes);
  }
};

export {
  auth,
  firestore,
  functions,
  loginWithEmailAndPassword,
  signupWithEmailAndPassword,
  updateProfile,
};
export default firebase;
