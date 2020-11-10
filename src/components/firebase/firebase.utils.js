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

export const createUserProfileDocument=async (userAuth,additionalData)=>{

     if(!userAuth) return;
    // console.log(userAuth)
     //following code will move from firebase authentication to database(cloud firestore)
    const userRef=firestore.doc(`users/${userAuth.uid}`);
    //const userRef=firestore.doc('users/8GrvPQbaKmX0JmZDZA20gZvzcdv2');
   // const userRef=firestore.doc('users/12345678');
    const snapShot=await userRef.get();

    //console.log(snapShot);

    if(!snapShot.exists){
        const {displayName,email}=userAuth;
        const createdAt=new Date();
    
            try{
                await userRef.set({
                    displayName,
                    email,
                    createdAt,
                    ...additionalData
                })
            }catch(error){
                console.log('error creating user',error.message)
            }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const SignInWithGoogle=()=>auth.signInWithPopup(provider);
export default firebase;