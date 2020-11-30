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
//storing user data in firestore database from firebase platform[authentication portion]
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

//add shop data into firestore dynamically
export const addCollectionAndDocuments=async(collectionKey,objectsToAdd)=>{
    const collectionRef=firestore.collection(collectionKey);
    console.log(collectionRef);

    const batch=firestore.batch();
    //we will use forEach method,its same like as map method,difference between forEach and map ethod is that 
    //map() method will return an new array
    //forEach() will not returnd an new array
    objectsToAdd.forEach(obj=>{
          const newDocRef=collectionRef.doc();//it will generate unique id for documents
          console.log(newDocRef);
          batch.set(newDocRef,obj)
    });
   return await batch.commit();
}

//fetch data from firestore
export const convertCollectionSnapshotToMap=(collectionsSnapshot)=>{
      const transformedCollection=collectionsSnapshot.docs.map(doc=>{
                                                         const {title,items}=doc.data();
          return{
               routeName:encodeURI(title.toLowerCase()),
               id:doc.id,
               title,items
              }
        });
   // console.log(transformedCollection);
    //above will returns us an array,but we need our collecton in objects form,so we will 
    //get collection in objects form as follows:
    return transformedCollection.reduce((accumulator,collection)=>{
        accumulator[collection.title.toLowerCase()]=collection;
        //console.log(accumulator);
        return accumulator;
        
    },{});//here we pass empty obj as 2nd argument in reduce fn,boz we wat shop data in object format so
}

//----------------ADMIN PORTION STARTS HERE--------------------------
/*   export const addItem=async (obj)=>{
    const batch=firestore.batch();
    const collectionRef=firestore.collection('collections');
    const documentRef=collectionRef.doc();
    batch.set(documentRef,obj);
    return await batch.commit();
} 
  */
 
//-----------------------ADMIN PORTION ENDS HERE--------------------------------------

firebase.initializeApp(config);

export const auth=firebase.auth();
export const firestore=firebase.firestore();

const provider=new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt:'select_account'});
export const SignInWithGoogle=()=>auth.signInWithPopup(provider);
export default firebase;