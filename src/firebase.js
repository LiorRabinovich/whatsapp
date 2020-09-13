import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBtb5VQdFGzlF2x_oRhle2OrCdl7_U6JGk",
    authDomain: "whatsapp-3cdf9.firebaseapp.com",
    databaseURL: "https://whatsapp-3cdf9.firebaseio.com",
    projectId: "whatsapp-3cdf9",
    storageBucket: "whatsapp-3cdf9.appspot.com",
    messagingSenderId: "245923866288",
    appId: "1:245923866288:web:b3de4855a493ba1066fd75",
    measurementId: "G-TTVB9SHEJ8"
};

export const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const googleProvider = new firebase.auth.GoogleAuthProvider();