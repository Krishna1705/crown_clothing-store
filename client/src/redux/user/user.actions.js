import UserActionTypes from './user.types';
/* export const setCurrentUser=user=>({  //here user is an snapshot objcet that we get from userRef ,LOOK App.js
    type:UserActionTypes.SET_CURRENT_USER,////it must be same as we defined in user.reducer.jsx
    payload:user
}) */

//after redux saga-promise based code instead of observables
export const googleSignInStart=()=>({
    type:UserActionTypes.GOOGLE_SIGN_IN_START,
})

/* export const googleSignInSuccess=(user)=>({
    type:UserActionTypes.GOOGLE_SIGN_IN_SUCCESS,
    payload:user
})

export const googleSignInFailure=(error)=>({
    type:UserActionTypes.GOOGLE_SIGN_IN_FAILURE,
    payload:error
})
 */
export const emailSignInStart=(emailAndPassword)=>({
    type:UserActionTypes.EMAIL_SIGN_IN_START,
    payload:emailAndPassword
})

/* export const emailSignInSuccess=(user)=>({
    type:UserActionTypes.EMAIL_SIGN_IN_SUCCESS,
    payload:user
})

export const emailSignInFailure=(error)=>({
    type:UserActionTypes.EMAIL_SIGN_IN_FAILURE,
    payload:error
}) */

export const signInSuccess=(user)=>({
    type:UserActionTypes.SIGN_IN_SUCCESS,
    payload:user
})

export const signInFailure=(error)=>({
    type:UserActionTypes.SIGN_IN_FAILURE,
    payload:error
}) 

export const checkUserSession=()=>({
    type:UserActionTypes.CHECK_USER_SESSION
})

export const signOutStart=()=>({
    type:UserActionTypes.SIGN_OUT_START
})

export const signOutSuccess=()=>({
    type:UserActionTypes.SIGN_OUT_SUCCESS
})

export const signOutFailure=(error)=>({
    type:UserActionTypes.SIGN_OUT_FAILURE,
    payload:error
})

export const signUpStart=(userCredentials)=>({
    type:UserActionTypes.SIGN_UP_START,
    payload:userCredentials//here usercredential will be  an obj which contains email,password and displayName as property name
})

export const signUpSuccess=({user,additionalData})=>({
    type:UserActionTypes.SIGN_UP_SUCCESS,
    payload:{user,additionalData},
    error:null
})
export const signUpFailure=(error)=>({
    type:UserActionTypes.SIGN_UP_FAILURE,
    payload:error
})
//noe goto user reducer for redux saga code