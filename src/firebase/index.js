import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

var config = {
    apiKey: "AIzaSyAXLDHhBz6hnUY1YJHsApCWQNG8bSdL-wA",
    authDomain: "recepie-23bfc.firebaseapp.com",
    databaseURL: "https://recepie-23bfc.firebaseio.com",
    projectId: "recepie-23bfc",
    storageBucket: "recepie-23bfc.appspot.com",
    messagingSenderId: "863845401624"
  };

firebase.initializeApp(config);
firebase.firestore().settings({timestampsInSnapshots: true});
export default firebase;
