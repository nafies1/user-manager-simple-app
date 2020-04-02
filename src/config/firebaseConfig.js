import firebase from "firebase/app"
// Required for side-effects
import 'firebase/firestore';

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID
});

export const db = firebase.firestore();