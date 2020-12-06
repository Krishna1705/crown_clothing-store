import UserActionTypes from './user.types';
const INITIAL_STATE={
    currentUser:null , //go through app.js check user's current state and then according to that define IITIAL_STATE
    error:null
}

const userReducer=(state=INITIAL_STATE, action)=>{

   switch(action.type){
    /*    case UserActionTypes.SET_CURRENT_USER:return {
                                        ...state,
                                        currentUser:action.payload
                                      } */
//after redux-saga                                       
       // case UserActionTypes.GOOGLE_SIGN_IN_SUCCESS:
        case UserActionTypes.SIGN_IN_SUCCESS:return{
                                                         ...state,
                                                         currentUser:action.payload,
                                                         error:null
                                                       }

       // case UserActionTypes.GOOGLE_SIGN_IN_FAILURE:
        case UserActionTypes.SIGN_IN_FAILURE:return{
                                                         ...state,
                                                         error:action.payload
                                                       }

        case UserActionTypes.SIGN_OUT_SUCCESS:return{
                                                      ...state,
                                                      currentUser:null,
                                                      error:null
                                                    }    
        case UserActionTypes.SIGN_OUT_FAILURE:
        case UserActionTypes.SIGN_UP_FAILURE:return{
                                                      ...state,
                                                      error:action.payload
                                                     }                                                   
                       
        default:return state;
   }
}
export default userReducer;

//now we go to the app.js codefor redux-saga code