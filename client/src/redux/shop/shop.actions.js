/* import ShopActionTypes from './shop.types';

export const updateCollections=(collectionsMap)=>({
    type:ShopActionTypes.UPDATE_COLLECTIONS,
    payload:collectionsMap
})
 */

 //-------------------after using redux-thunk-------------------
import ShopActionTypes from './shop.types';
import {firestore,convertCollectionSnapshotToMap} from '../../components/firebase/firebase.utils'


 export const fetchCollectionsStart=()=>({
     type:ShopActionTypes.FETCH_COLLECTIONS_START,
 });

 export const fetchCollectionsSuccess=(collectionsMap)=>({
     type:ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
     payload:collectionsMap
 });

 export const fectchCollectionFailure=(errorMessage)=>({
    type:ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
    payload:errorMessage
});
 //here we moved all code of fetch data from shop.component.jsx page to this redux-thunk as follows
 //asynchronous redux
 //when this file loaded,redux-thunk will find function to run ,it will not proceed objets so it find 
 //fetchCollectionStartAsync and then it perorms it
//--------------redux thunk----------------------
//NOTE:if we use redux-saga then we need to comment below code

 /* 
 export const fetchCollectionsStartAsync=()=>{
 
    return dispatch=>{
        const collectionRef= firestore.collection('collections');
        dispatch(fetchCollectionsStart());//we can do it bcoz of redux-thunk library

        collectionRef.get().then(snapshot=>{
                            //call to firebase.utils.js method
                                         const collectionsMap= convertCollectionSnapshotToMap(snapshot);
                                         console.log(collectionsMap);
                                         dispatch(fetchCollectionsSuccess(collectionsMap))      
                                })
                                .catch(error=>dispatch(fectchCollectionFailure(error.message)))
 };
}
 */
