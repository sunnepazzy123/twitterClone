
import firebase from "firebase"

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyBugSGkCS1Xq4Wx_Px8NJDp1xzGJRrBrfw",
    authDomain: "twitter-clone-9172c.firebaseapp.com",
    projectId: "twitter-clone-9172c",
    storageBucket: "twitter-clone-9172c.appspot.com",
    messagingSenderId: "991100961733",
    appId: "1:991100961733:web:fb9247478004bb625ac1ac",
    measurementId: "G-0LG4EWNBS0"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore()
//   firebase.analytics();

export default db;