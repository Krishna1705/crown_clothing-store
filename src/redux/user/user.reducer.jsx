const INITIAL_STATE={
    currentUser:null  //go through app.js check user's current state and then according to that define IITIAL_STATE
}

const userReducer=(state=INITIAL_STATE, action)=>{

   switch(action.type){
       case 'SET_CURRENT_USER':return {
                                        ...state,
                                        currentUser:action.payload
                                      }
                              
        default:return state;
   }
}
export default userReducer;