/* //import SHOP_DATA from './shop.data';
import ShopActionTypes from './shop.types';

const INITIAL_STATE={
     //collections:SHOP_DATA
     //now we reach to the concept of HOC,now we delete shop_data file and we set collections
     // so we need to make changes in selectors file also,check selector file
     collections:null
}

const shopReducer=(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case ShopActionTypes.UPDATE_COLLECTIONS:return {
                                                            ...state,
                                                            collections:action.payload
                                                        };
        default:return state;
    }
}

export default shopReducer; */

//-------------------after using redux-thunk-------------------
import ShopActionTypes from './shop.types';

const INITIAL_STATE={
    collections:null,
    isFetching:false,
    errorMessage:undefined
}

const shopReducer=(state=INITIAL_STATE,action)=>{
      switch(action.type){
         case ShopActionTypes.FETCH_COLLECTIONS_START:return{
            ...state,
            isFetching:true
         }

         case ShopActionTypes.FETCH_COLLECTIONS_SUCCESS:return{
            ...state,
            collections:action.payload,
            isFetching:false
         }

         case ShopActionTypes.FETCH_COLLECTIONS_FAILURE:return{
            ...state,
            isFetching:false,
            errorMessage:action.payload
         }

          default :return state
      }
}

export default shopReducer;