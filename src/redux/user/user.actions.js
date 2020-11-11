import {UserActionTypes} from './user.types';
export const setCurrentUser=user=>({  //here user is an snapshot objcet that we get from userRef ,LOOK App.js
    type:UserActionTypes.SET_CURRENT_USER,////it must be same as we defined in user.reducer.jsx
    payload:user
})