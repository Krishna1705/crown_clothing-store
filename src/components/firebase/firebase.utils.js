import firebase from 'firebase/app';
import "firebase/firestore";
import "firebase/auth";

const config={
    apiKey: "AIzaSyAZW2cRwq-X1tFcn6V6BEa8386VwzTmhXI",
    authDomain: "crown-db-fa6d7.firebaseapp.com",
    databaseURL: "https://crown-db-fa6d7.firebaseio.com",
    projectId: "crown-db-fa6d7",
    storageBucket: "crown-db-fa6d7.appspot.com",
    messagingSenderId: "727911051834",
    appId: "1:727911051834:web:07382c9315a183fa7f7b03",
    measurementId: "G-YH4KPWQTLK"
};

firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const SignInWithGoogle=()=>auth.signInWithPopup(provider);
export default firebase;