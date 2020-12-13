//in redux thunk we write all async code inside shop.actions.js file
//now in redux-thunk we write all code inside shop.sagas.js file using generator functions
import {takeEvery,takeLatest,call,put, all} from 'redux-saga/effects';//takeevery listens for every action that we passed.
//it actually creates a non blocking code ,yield pause the function execution,until we run next(),
//but with the help of takeevery its possible to create a non blocking code inside generator function
import ShopActionTypes from './shop.types';
import {convertCollectionSnapshotToMap,firestore} from '../../components/firebase/firebase.utils';
import {fetchCollectionsSuccess,fectchCollectionFailure} from './shop.actions';

export function* fetchCollectionsAsync(){
   try{
        yield console.log("kajal is called");
        const collectionRef= firestore.collection('collections');
        const snapshot=yield collectionRef.get();
        const collectionsMap=yield call(convertCollectionSnapshotToMap,snapshot);
        yield put(fetchCollectionsSuccess(collectionsMap)); //put works same like dipatch,it dispatch actions

   }catch(error){
    yield put(fectchCollectionFailure(error.message));
   }
}
export function* fetchCollectionsStart(){
 yield takeLatest(ShopActionTypes.FETCH_COLLECTIONS_START,fetchCollectionsAsync);
}

export function* shopSagas(){
   yield all([call(fetchCollectionsStart)]);
}