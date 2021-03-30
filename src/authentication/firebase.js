import firebase from 'firebase/app'
import 'firebase/auth'

const app = firebase.initializeApp({
  apiKey: "AIzaSyCT70qv3lZ7oHcYFdsZb-8Y6e9KkXWb2eo",
  authDomain: "auth-dev-fdda8.firebaseapp.com",
  projectId: "auth-dev-fdda8",
  storageBucket: "auth-dev-fdda8.appspot.com",
  messagingSenderId: "179731724282",
  appId: "1:179731724282:web:53f954dd077e97ce141643"
});

export const auth = app.auth();
export default app;
