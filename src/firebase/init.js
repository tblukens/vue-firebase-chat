import firebase from 'firebase'
import firestore from 'firebase/firestore'

// Initialize Firebase
var config = {
    apiKey: "{apikey}",
    authDomain: "tbl-chat.firebaseapp.com",
    databaseURL: "https://tbl-chat.firebaseio.com",
    projectId: "tbl-chat",
    storageBucket: "tbl-chat.appspot.com",
    messagingSenderId: "{senderid}"
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true })

export default firebaseApp.firestore()