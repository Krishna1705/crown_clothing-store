//import SHOP_DATA from './shop.data';
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

export default shopReducer;