import firebase from 'firebase/app';
import 'firebase/firestore';
const firestore= firebase.firestore();

firestore.collection('users').doc('QpA1VKSywh1T6oGKrZk3').collection('CartItems').doc('Buh6MPmZoMjz5pBqiCdy');

//or

firestore.doc('/users/QpA1VKSywh1T6oGKrZk3/CartItems/Buh6MPmZoMjz5pBqiCdy');
firestore.collection('/users/QpA1VKSywh1T6oGKrZk3/CartItems')