  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAU7C_sENgFWCcCGfACVxQCxJG15CWXpXc",
    authDomain: "instagram-clone2-39923.firebaseapp.com",
    databaseURL: "https://instagram-clone2-39923-default-rtdb.firebaseio.com",
    projectId: "instagram-clone2-39923",
    storageBucket: "instagram-clone2-39923.appspot.com",
    messagingSenderId: "347878971977",
    appId: "1:347878971977:web:665465658ac6c5a6bcfd98",
    measurementId: "G-8XX7XN2DQG"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export { db, auth, storage };
  
   