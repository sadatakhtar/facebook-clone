import firebase from 'firebase'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCPgBe4-EImhvGsyo7fio3SuqGCcb3Ssyw",
  authDomain: "facebook-clone-aca74.firebaseapp.com",
  projectId: "facebook-clone-aca74",
  storageBucket: "facebook-clone-aca74.appspot.com",
  messagingSenderId: "690887244981",
  appId: "1:690887244981:web:0e5aa69994ee00462f52fc"
};

const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app()
const db = app.firestore();
const storage = firebase.storage();

export { db, storage}