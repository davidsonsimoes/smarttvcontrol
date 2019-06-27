import Firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyD9t4jqwTwSHQu-eB_WxPkC-Jp8QkxwL3w",
    authDomain: "smarttvcontrol-b5f68.firebaseapp.com",
    databaseURL: "https://smarttvcontrol-b5f68.firebaseio.com",
    projectId: "smarttvcontrol-b5f68",
    storageBucket: "smarttvcontrol-b5f68.appspot.com",
    messagingSenderId: "199170819031",
    appId: "1:199170819031:web:3e314dfb1e26d216"
  };

let app = Firebase.initializeApp(firebaseConfig)
export const db = app.database().ref('/')