import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "${{ secrets.API_KEY }}",
    authDomain: "atividade-somativa-2-ad590.firebaseapp.com",
    projectId: "atividade-somativa-2-ad590",
    storageBucket: "atividade-somativa-2-ad590.appspot.com",
    messagingSenderId: "666991826461",
    appId: "1:666991826461:web:8b47aabbc2dda47b6118f4"
  };

  if(!firebase.apps.length)
  {
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;