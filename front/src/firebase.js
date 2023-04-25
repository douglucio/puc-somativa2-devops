import firebase from "firebase/app";
import'firebase/firestore';
import 'firebase/auth';



const firebaseConfig = {
    apiKey: "AIzaSyAzm_7MCAnGqE7kQiENOHbZ2vnakRjGVww",
    authDomain: "as-dev-web.firebaseapp.com",
    projectId: "as-dev-web",
    storageBucket: "as-dev-web.appspot.com",
    messagingSenderId: "959735811603",
    appId: "1:959735811603:web:f5b153504f3d2d2a1ff9e6"
  };

  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;